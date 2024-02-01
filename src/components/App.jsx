import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeFilter,
  // createContact,
  // deleteContact,
} from 'store/phonebookSlice';
// import { initialState } from 'store/initialState';
import { useEffect } from 'react';
import { createContactsThunk, deleteContactsThunk, getContactsThunk } from 'store/contactsThunk';
// import { initialState } from 'store/initialState';

const App = () => {
  const { filter, items } = useSelector(state => state.contact);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk())
  },[dispatch])

  const addContact = (name, phone) => {
    items.some(i => i.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name}  is already in contacts`)
      : items.some(i => i.phone === phone)
      ? alert(`${phone} is already in contacts number`)
      : dispatch(createContactsThunk({name, phone}));
  };

  const onDeleteContact = id => {
    dispatch(deleteContactsThunk(id, items));
  };

  const onChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  const filteredContacts = () => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={s.appContainer}>
      <h1 className={s.titlePhonebook}>Phonebook</h1>

      <ContactForm addContact={addContact} />

      <h2 className={s.titlePhonebook}>Contacts</h2>
      <Filter onChangeFilter={onChangeFilter} value={filter} />
      <ContactList
        onDeleteContact={onDeleteContact}
        contacts={filteredContacts()}
      />
    </div>
  );
};

export default App;
