import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './contactsThunk';


const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleFulfilled = (state) => {
  state.contacts.isLoading = false;
  state.contacts.error = '';
}


const handleFulfilledGet = (state, { payload }) => {
  // state.isLoading = false;
  state.contacts.items = payload;
  // state.error = '';
};
const handleFulfilledCreate = (state, { payload }) => {
  // state.isLoading = false;
  state.contacts.items.push(payload);
  // state.error = '';
};
const handleFulfilledDelete = (state, { payload }) => {
  // state.isLoading = false;
    state.contacts.items = state.contacts.items.filter(contact=>contact.id!==payload.id)
  // state.error = '';
};

const handleRejected = (state, { payload }) => {

  
  state.contacts.isLoading = false;
  state.contacts.error = payload;

    
};

export const contactSlice = createSlice({
  name: 'contacts',
  // initialState: initialState.contacts,
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
      
    },
  },

  extraReducers: builder => {
    builder
      // .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      // .addCase(getContactsThunk.rejected, handleRejected)
      // .addCase(createContactsThunk.pending, handlePending)
      .addCase(createContactsThunk.fulfilled, handleFulfilledCreate)
      // .addCase(createContactsThunk.rejected, handleRejected)
      // .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      // .addCase(deleteContactsThunk.rejected, handleRejected)
      .addMatcher(
        isAnyOf(
          
          getContactsThunk.pending,
          createContactsThunk.pending,
          deleteContactsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          createContactsThunk.rejected,
          deleteContactsThunk.rejected
        ),
        handleRejected
    )
          .addMatcher(
        isAnyOf(
          getContactsThunk.fulfilled,
          createContactsThunk.fulfilled,
          deleteContactsThunk.fulfilled
        ),
        handleFulfilled
      );
  },
});

export const contactReducer = contactSlice.reducer;

export const {changeFilter} = contactSlice.actions;