import { combineReducers } from 'redux';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
