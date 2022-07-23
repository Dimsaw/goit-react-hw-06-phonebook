import { createSlice } from '@reduxjs/toolkit';
import { contactDefault } from '../data/data';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: contactDefault,
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,

    reducers: {
        addContact(state, { payload }) {
            state.items.push(payload)
        }
        deleteContact(state, { payload }) {
            state.items = state.items.filter(({id}) => id !== payload)
        }
        filterContact(state, { payload }) {
            state.filter = payload
        }
  },
});
