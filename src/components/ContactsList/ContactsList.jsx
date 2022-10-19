import React from 'react';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <>
    <p>Contacts</p>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}:</span>
          <span>{number}</span>

          <button onClick={() => onDeleteContact(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  </>
);

export default ContactsList;
