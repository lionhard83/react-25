import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import { preferiteReducer } from "./preferiteSlice";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    preferite: preferiteReducer,
    products: productsReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
