import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { themeReducer } from "./themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
