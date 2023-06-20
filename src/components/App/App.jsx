import { Component } from 'react';
import ContactForm from '../contact-form/ContactForm';
import ContactList from '../contact-list/ContactList';
import Filter from '../filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addInState = data => {
    const nameContact = this.state.contacts.find(obj => obj.name.toLowerCase() === data.name.toLowerCase());
    console.log(nameContact);
    if (!nameContact) {
      const contact = { name: data.name, number: data.number, id: data.id };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    } else {
      alert('Такий контакт вже існує');
    }
  };

  // listContacts = () => {
  //   return this.state;
  // };

  deleteContactState = id => {
    const { contacts } = this.state;
    const updContacts = contacts.filter(obj => obj.id !== id);
    this.setState({ contacts: updContacts });
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    console.log(this.state);
  };

  filterContactList = () => {
    const normalizedText = this.state.filter.toLowerCase();
    return this.state.contacts.filter(obj =>
      obj.name.toLowerCase().includes(normalizedText)
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addInState} />
        <h2>Contacts</h2>
        <Filter handleChange={this.handleFilter} value={this.state.filter} />
        <ContactList
          dataContact={this.filterContactList()}
          deleteList={this.deleteContactState}
        />
      </div>
    );
  }
}
