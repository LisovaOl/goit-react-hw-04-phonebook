import React, { Component } from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';

import ContactsList from '../ContactsList/ContactsList';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import { Title, ContactsTitle } from './App.styled';

export class App extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    // filter: PropTypes.string,
  };

  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    filter: '',
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
  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFiltredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(cont =>
      cont.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const contactsLocal = localStorage.getItem('contacts'); // обєкт приходить як строка. надо распарсить
    // const parsedContacts = JSON.parse(contacts); // не работает
    console.log(contactsLocal);
    // console.log(parsedContacts);
  }

  // 1-local

  componentDidUpdate(prevProps, prevState) {
    console.log('add update');
    if (this.state.contacts !== prevState.contacts) {
      // 2-local проверка на одновление
      console.log('contacts обновилось ');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts)); // 3-local storage
      // setState ставить нельзя только при проверке
    }
    console.log(prevState);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Title>PhoneBook</Title>
        <ContactForm onSubmit={this.addContact} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />

        <ContactsList
          contacts={this.getFiltredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
