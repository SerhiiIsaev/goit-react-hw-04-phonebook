import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
  const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem('contactsList')) ?? [] );
  const [filter, setFilter] = useState('');

  const onFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const getFilteredContacts = () => {
    return contacts.filter(({name}) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
  }

  const addContact = (contact) => {
    
    const chekContact = contacts.filter(item => item.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase())
    if (chekContact.length > 0) {
      return alert(`${contact.name} is already in contacts`)
    } else {
        const newContact = {
          id: nanoid(),
        ...contact
        }
      return setContacts([...contacts, newContact]);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
        name: e.target.name.value,
        number: e.target.number.value,
    }
    addContact(contact)
    e.target.number.value = '';
    e.target.name.value = '';
  }
 
  const removeContact = (id) => {
    const newContacts = contacts.filter((item) => item.id !== id);
    return setContacts([...newContacts])
  }

  useEffect(() => {
    
    localStorage.setItem('contactsList', JSON.stringify(contacts))
    
  }, [contacts])
  
  const data = getFilteredContacts()
  return(
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter onFilterChange={onFilterChange} filter = {filter} />
      <ContactList items = {data} removeContact={removeContact} />
    </div>
  )
  
};
