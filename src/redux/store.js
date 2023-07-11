import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/auth-slice';
import contactsSlice from '../redux/contactsSlice';
import filterSlice from '../redux/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// Store
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsSlice,
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
