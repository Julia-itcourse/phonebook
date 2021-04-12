import {Component} from 'react';
import { uuid } from "uuidv4";
import { Typography } from '@material-ui/core';
import Layout from './Components/Layout';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';



class App extends Component{


  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', phoneNumber: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', phoneNumber: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', phoneNumber: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', phoneNumber: '227-91-26'},
    ],
    filter: ''
  }

addContact = ({name, phoneNumber}) => {
const contact = {
  id: uuid(),
  name, 
  phoneNumber,
};

this.setState((prevState)=>{
  return {
    contacts: [...prevState.contacts, contact]
  }
})
  }

deleteContact = (contactId) =>{
console.log("In delete fu");
this.setState((prevState)=>{
  return{
    contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
  };
});

}

changeFilter = (filter) => {
this.setState({filter})
}

getFilteredContacts = () => {
  const {contacts, filter} = this.state;
 return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()),)
}

  render() {
const filter = this.state.filter;
    const contacts = this.state.contacts;
    const filteredContacts = this.getFilteredContacts()
    return (
      <Layout>
        <ContactForm onAddContact = {this.addContact}/>
        <Typography variant="h3" gutterBottom> Contacts</Typography>
        {contacts.length === 0 && (<Typography variant="h5" color = "secondary">No contacts yet</Typography>)}
       {contacts.length > 1 && (<Filter value = {filter} onChangeFilter = {this.changeFilter} />)}
       { filteredContacts.length > 0 && (<ContactList contacts = {filteredContacts} onDeleteContact = {this.deleteContact}/>)}
      </Layout>
    )
  }
}

export default App;
