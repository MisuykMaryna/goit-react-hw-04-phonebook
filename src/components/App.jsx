import { useState, useEffect } from 'react';
import Contacts from 'components/contacts.json';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from './App.module.css';
import { nanoid } from 'nanoid';

export function App () {

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || Contacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => { localStorage.setItem('contacts', JSON.stringify(contacts))},
    [contacts])
  

  
  const formSubmitHandler = ({name, number}) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
      const includeName = contacts.find(contact => contact.name === newContact.name);
      if (includeName) {
        alert(`${newContact.name} is already in contacts`);
      } else {
        setContacts ([newContact, ...contacts]);
      }
  };

   const ChangeFilter = e => {
     setFilter(e.currentTarget.value);
  }


   const onDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id))
  };
  

    const getVisibleContacts = () => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({name}) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
   const visibleContacts = getVisibleContacts();
    return (
      <div className={css.container}>
         <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler}/>
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter}
          onChange={ChangeFilter} />
        
         <ContactList items={visibleContacts}
          onClick={onDelete} />
      </div>
   )
  };
