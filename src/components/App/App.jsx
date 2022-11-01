import React, { useState } from 'react';

import shortid from 'shortid';

import ContactsList from '../ContactsList/ContactsList';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import { Title, ContactsTitle } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = data => {
    const newContact = { ...data, id: shortid.generate() };
    if (
      contacts
        .map(contact => contact.name.toLowerCase())
        .includes(data.name.toLowerCase())
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts([newContact, ...contacts]);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
    }
  

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value );
  };

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedСontacts = JSON.parse(contacts);
  //   // Перевірка на наявність даних в storage
  //   if (parsedСontacts) {
  //     this.setState({ contacts: parsedСontacts });
  //   };
  // }
  // 1-local

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     // 2-local проверка на обновление
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts)); // 3-local storage
  //     // setState ставить нельзя только при проверке
  //   };
  // }

  return (
    <div>
      <Title>PhoneBook</Title>
      <ContactForm onSubmit={addContact} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter value={filter} onChange={onChangeFilter} />

      <ContactsList
        contacts={getFiltredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [],
//     // contacts: JSON.parse(localStorage.getItem('contacts')) || [],
//     filter: '',
//   };

//   addContact = data => {
//     //data for Submit передать пропсами в компоненм ContactForm
//     const newContact = { ...data, id: shortid.generate() }; // New contact with id
//     if (
//       this.state.contacts // проверка на наличие имени в списке
//         .map(contact => contact.name.toLowerCase())
//         .includes(data.name.toLowerCase())
//     ) {
//       alert(`${data.name} is already in contacts`);
//     } else {
//       this.setState(prevState => ({
//         // добавить новую запись в начало
//         contacts: [newContact, ...prevState.contacts],
//       }));
//     }
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };
//   onChangeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getFiltredContacts = () => {
//     const normalizedFilter = this.state.filter.toLowerCase();
//     return this.state.contacts.filter(cont =>
//       cont.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedСontacts = JSON.parse(contacts);
//     // Перевірка на наявність даних в storage
//     if (parsedСontacts) {
//       this.setState({ contacts: parsedСontacts });
//     }
//   }
//   // 1-local

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       // 2-local проверка на обновление
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts)); // 3-local storage
//       // setState ставить нельзя только при проверке
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Title>PhoneBook</Title>
//         <ContactForm onSubmit={this.addContact} />
//         <ContactsTitle>Contacts</ContactsTitle>
//         <Filter value={this.state.filter} onChange={this.onChangeFilter} />

//         <ContactsList
//           contacts={this.getFiltredContacts()}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;
