import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, (state, action) => handlePending(state))
      .addCase(addContact.pending, (state, action) => handlePending(state))
      .addCase(deleteContact.pending, (state, action) => handlePending(state))
      .addCase(fetchContacts.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(addContact.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(deleteContact.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      }),
});

export default contactsSlice.reducer;
