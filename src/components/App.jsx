import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import {
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from 'store/contactsThunk';
import Loader from './loader/Loader';
import { changeFilter } from 'store/contactSliсe';
import { contactsSelector, filterSelector } from 'store/selectors';





const App = () => {
  const {  items, isLoading, error } = useSelector(contactsSelector);
  const {filter} = useSelector(filterSelector)

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const addContact = (name, phone) => {
    items.some(i => i.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name}  is already in contacts`)
      : items.some(i => i.phone === phone)
      ? alert(`${phone} is already in contacts number`)
      : dispatch(createContactsThunk({ name, phone }));
  };

  const onDeleteContact = id => {
    dispatch(deleteContactsThunk(id, items));
  };

  const onChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
    
  };

  // const filteredContacts = () => {
    
  //     return items.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
      
  //   )
  // };

//   const sortedContacts = items && [...items].sort((a, b) => {
//   const nameA = a.name.toLowerCase();
//   const nameB = b.name.toLowerCase();
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }
//   return 0;
  // });

  const filteredAndSortedContacts = () => {
    return items
      .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name))
  }

  console.log('filter=>', filter, 'contacts=>' ,items ,'error=>', error)

  return (
    <div className={s.appContainer}>
      <h1 className={s.titlePhonebook}>Phonebook</h1>

      <ContactForm addContact={addContact} />

      <h2 className={s.titlePhonebook}>Contacts</h2>
      <Filter onChangeFilter={onChangeFilter} value={filter}></Filter>
      {isLoading && <Loader />}
      <ContactList
        onDeleteContact={onDeleteContact}
        errors = {error}
        // contacts={filteredContacts()}
        // contacts = {sortedContacts}
        contacts ={filteredAndSortedContacts()}

      />
      
    </div>
  );
};

export default App;
