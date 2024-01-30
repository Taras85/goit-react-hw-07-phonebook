import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: initialState.phonebook,
  reducers: {
    createContact: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },

      prepare: (name, number) => ({
        payload: {
          id: nanoid(),
          name,
          number,
        },
      }),
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
    deleteContact: {
      reducer: (state, { payload }) => {
        state.contacts = payload;
      },

      prepare: (id,contacts )=> ({
        payload: contacts.filter(contact => contact.id !== id),
      }),
    },
  },
});

export const phonebookReducer = phonebookSlice.reducer;

export const { deleteContact, changeFilter, createContact } =
  phonebookSlice.actions;
