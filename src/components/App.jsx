import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export default class App extends Component {

  state={
    contacts: [],
    filter: '',
  }

  onFilterChange = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state
    return contacts.filter(({name}) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
  }

  addContact = (contact) => {
    const {contacts} = this.state
      const chekContact = contacts.filter(item => item.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase())
      if (chekContact.length > 0) {
        return alert(`${contact.name} is already in contacts`)
      } else {
        this.setState((prev) => {
        const newContact = {
            id: nanoid(),
          ...contact
        }
        return {
          contacts: [...prev.contacts, newContact]
        }
      })}
  }

  handleSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: e.target.name.value,
            number: e.target.number.value,
        }
        this.addContact(contact);
        e.target.number.value = '';
        e.target.name.value = '';
  }

  removeContact = (id) => {
    this.setState((prev) => {
        const newContacts = prev.contacts.filter((item) => item.id !== id);
        return {
          contacts: newContacts
        }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      console.log(prevState.contacts)
      localStorage.setItem('contactsList', JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount() {
    const saveContacts = JSON.parse(localStorage.getItem('contactsList'))? JSON.parse(localStorage.getItem('contactsList')) : [] ;
    this.setState({contacts: saveContacts})
  }

  render() {
    const data = this.getFilteredContacts()
    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter onFilterChange={this.onFilterChange} filter = {this.state.filter} />
        <ContactList items = {data} removeContact={this.removeContact} />
      </div>
    )
  };
};
