import { combineReducers } from 'redux';

import { phonebookReducer } from './phonebookSlice';

export const reducer = combineReducers({
  phonebook: phonebookReducer,
});
