import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const preferiteSlice = createSlice({
  name: "preferite",
  initialState: {
    value: [] as number[],
  },
  reducers: {
    toggle: (state, action: PayloadAction<number>) => {
      const exists = state.value.includes(action.payload);
      console.log("exists");
      if (exists) {
        state.value = state.value.filter((item) => item !== action.payload);
      } else state.value.push(action.payload);
    },
  },
});

export const { toggle } = preferiteSlice.actions;
export const preferiteReducer = preferiteSlice.reducer;

// dispatch(add("pippo"))
// dispatch(add(3))
// dispatch(remove(3))
