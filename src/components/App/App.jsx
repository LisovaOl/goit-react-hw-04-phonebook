import React, { Component } from 'react'
import shortid from 'shortid';


import ContactsList from '../ContactsList/ContactsList';
import ContactForm from '../ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = data => {
    //data for Submit передать пропсами в компоненм ContactForm
    const newContact = { ...data, id: shortid.generate() }; // New contact with id
    if (
      this.state.contacts // проверка на наличие имени в списке
        .map(contact => contact.name.toLowerCase())
        .includes(data.name.toLowerCase())
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        // добавить новую запись в начало
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.addContact} />
        <br />
        <ContactsList
          contacts={this.state.contacts}
          name={this.state.name}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App


