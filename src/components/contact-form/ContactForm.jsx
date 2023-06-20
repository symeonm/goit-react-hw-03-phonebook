import { nanoid } from 'nanoid';
import { Component } from 'react';
import PropTypes from 'prop-types';
export default class FormAdd extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset()
    
  };

  

  handleChange = e => {
    console.log(e.target.id);
    this.setState({[e.target.name]: e.target.value, id: e.target.id})
  }

  reset = () => {
    this.setState({ name: ''.toLowerCase(), number: '', id: '' });
  };

 

  

  render() {
    const {name, number} = this.state
    const idContact = nanoid();
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={idContact}>
          Name
          <input
            id={idContact}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            required
          />
        </label>
        <label htmlFor={idContact}>
          Number
          <input
            id={idContact}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

FormAdd.propTypes = {
onSubmit: PropTypes.func.isRequired,
}
