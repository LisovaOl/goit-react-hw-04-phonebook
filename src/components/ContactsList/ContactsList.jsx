import React from 'react';
import { Title, List, Item, Name, Number, Button } from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <>
    <Title>Contacts</Title>
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Name>{name}:</Name>
          <Number>{number}</Number>

          <Button onClick={() => onDeleteContact(id)}>Удалить</Button>
        </Item>
      ))}
    </List>
  </>
);

export default ContactsList;
