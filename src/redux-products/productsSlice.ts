import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../models/Product";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [] as Product[],
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
