import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notesSlice";

import { loadState, localStorageMiddleware } from "../utils/localStorage";
const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },

  preloadedState,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
