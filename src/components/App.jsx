import React, { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from './App.module.css';
import { nanoid } from 'nanoid';

export class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
 filter: '',
}
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }
}
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }
  
  formSubmitHandler = ({name, number}) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => {
      const includeName = contacts.find(contact => contact.name === name);
      if (includeName) {
        alert(`${name} is already in contacts`);
      } else {
        return { contacts: [newContact, ...contacts] };
      }
    });
  };

  ChangeFilter = e => {
    this.setState({filter:e.currentTarget.value})
  }


   onDelete = id => {
    const { contacts } = this.state;
    const updatesContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatesContacts });
  };

   getVisibleContacts = () => {
  const { filter, contacts} = this.state;
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({name}) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

  render() {
     const { filter } = this.state;
      const visibleContacts = this.getVisibleContacts();
    return (
      <div className={css.container}>
         <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter}
          onChange={this.ChangeFilter} />
        
         <ContactList items={visibleContacts}
          onClick={this.onDelete} />
      </div>
   )
  };
}