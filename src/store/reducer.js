import { combineReducers } from 'redux';

import { phonebookReducer } from './phonebookSlice';
import { contactReducer } from './contactSliсe';

export const reducer = combineReducers({
  phonebook: phonebookReducer,
  contact: contactReducer,
  
});
