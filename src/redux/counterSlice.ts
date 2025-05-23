import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { increment, decrement, set } = counterSlice.actions;
