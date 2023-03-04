import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterContactsSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    filterContact: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { filterContact } = filterContactsSlice.actions;
export default filterContactsSlice.reducer;
