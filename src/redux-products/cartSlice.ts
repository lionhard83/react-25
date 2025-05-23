import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/Product";

type ProductWithQty = Product & { qty: number };

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {
      totalPrice: 0,
      products: [] as ProductWithQty[],
    },
  },
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const product = state.value.products.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.qty++;
      } else {
        state.value.products.push({ ...action.payload, qty: 1 });
      }
      state.value.totalPrice = Number(
        state.value.products
          .reduce((acc, item) => (acc += item.price), 0)
          .toFixed(2)
      );
    },
    remove: (state, action: PayloadAction<Product>) => {
      const product = state.value.products.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.qty--;
      }
      state.value.products = state.value.products.filter(
        (item) => item.qty > 0
      );
      state.value.totalPrice = Number(
        state.value.products
          .reduce((acc, item) => (acc += item.price), 0)
          .toFixed(2)
      );
    },
    clear: (state) => {
      state.value = { totalPrice: 0, products: [] };
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
