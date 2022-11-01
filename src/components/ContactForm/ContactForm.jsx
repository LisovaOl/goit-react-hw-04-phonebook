import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Label, Button, Input } from './ContactForm.styled';

export default function ContactForm ({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  }
    const handleNumberChange = e => {
      setNumber(e.currentTarget.value);
    };


  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number}); // 2. text from App
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleNameChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleNumberChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
};


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export class ContactForm extends Component {

//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     // console.log(e.currentTarget.value);
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     // console.log(this.state);
//     this.props.onSubmit(this.state); // 2. text from App

//     this.setState({ name: '', number: '' }); // 3. reset field
//   };

//   render() {
//     return (
//       <div>
//         <Form onSubmit={this.handleSubmit}>
//           <Label>
//             Name
//             <Input
//               type="text"
//               name="name"
//               value={this.state.name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={this.handleChange}
//             />
//           </Label>
//           <Label>
//             Number
//             <Input
//               type="tel"
//               name="number"
//               value={this.state.number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               onChange={this.handleChange}
//             />
//           </Label>
//           <Button type="submit">Add contact</Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default ContactForm;
