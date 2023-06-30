import { Component } from 'react';
import { ContactForm } from './ContactForm/ConctactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Wrapper } from 'App.styled';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';
export class App extends Component {
  state = {
    contacts: [],
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
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Wrapper>
        <h1>Phonebook</h1>

        <ContactForm
          contacts={this.state.contacts}
          onAddContact={this.handleAddContact}
        />
        
        <h2>Contacts</h2>
        {this.state.contacts.length !== 0 ? (
          <>
            <Filter contacts={this.state} onChangeFilter={this.changeFilter} />
            <ContactList
              filteredContacts={filteredContacts}
              deleteContact={this.deleteContact}
            />
          </>
        ) : (
          <NotificationMessage />
        )}
      </Wrapper>
    );
  }
}
