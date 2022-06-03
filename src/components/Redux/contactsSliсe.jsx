import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      state.items = state.items.filter((arrow) => arrow.id !== action.payload);
    },
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["items"],
};

export const persistContacts = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { add, remove, filter } = contactsSlice.actions;

//Selectors

export const getContactState = (state) => state.contacts.items;
