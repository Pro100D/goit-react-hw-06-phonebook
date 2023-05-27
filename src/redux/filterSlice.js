// import { useSelector } from 'react-redux';

const { createSlice } = require('@reduxjs/toolkit');

const filterinitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterinitialState,
  reducers: {
    filtred(state, actions) {
      return (state = actions.payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filtred } = filterSlice.actions;
