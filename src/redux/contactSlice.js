import shortid from 'shortid';

const { createSlice } = require('@reduxjs/toolkit');

const contactInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactInitialState,
  reducers: {
    addContact(state, actions) {
      const checkContact = state.find(
        contact => contact.name === actions.payload.name
      );

      if (checkContact) {
        window.alert(`${actions.name} is already in contacts.`);
        return;
      }

      const newContact = {
        id: shortid.generate(),
        name: actions.payload.name,
        number: actions.payload.number,
      };

      state.push(newContact);
    },

    deleteContact(state, actions) {
      return state.filter(contact => contact.id !== actions.payload);
    },
  },
});

export const contactReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
