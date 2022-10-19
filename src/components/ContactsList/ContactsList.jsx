import React from 'react';
import PropTypes from 'prop-types';

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

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
