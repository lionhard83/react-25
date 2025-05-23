import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "light",
  },
  reducers: {
    toggle: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { toggle, set } = themeSlice.actions;
