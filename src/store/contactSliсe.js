import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getContactsThunk } from './contactsThunk';

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.phonebook,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
        // (state, { payload }) => {
        // console.log( '=>>', state.items);
        // state.isLoading = false;
        // state.items = payload;
        // state.error = '';
        // console.log(state.items, '=>>', payload);
      // }
      // )
      .addCase(getContactsThunk.rejected, handleRejected);
  },
});


export const contactReducer = contactSlice.reducer;
