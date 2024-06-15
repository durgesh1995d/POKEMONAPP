import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from '../api/pokemonApi';
import { persistReducer, persistStore } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      pokemonApi.middleware
    ),
});

export const persistor = persistStore(store);
