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
    contacts: [],
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
