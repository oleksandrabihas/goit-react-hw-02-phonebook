import { Component } from 'react';
import { ContactForm } from './ContactForm/ConctactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
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

  handleAddContact = newContact => {
    const { contacts } = this.state;
    this.setState({
      contacts: [...contacts, newContact],
    });
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm
          contacts={this.state.contacts}
          onAddContact={this.handleAddContact}
        />
        <h2>Contacts</h2>

        <Filter contacts={this.state} onChangeFilter={this.changeFilter} />
        <ContactList filteredContacts={filteredContacts} deleteContact={ this.deleteContact} />
      </div>
    );
  }
}
