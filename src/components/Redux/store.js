import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistContacts } from "./contactsSliсe";

export const store = configureStore({
  reducer: {
    contacts: persistContacts,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
