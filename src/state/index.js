// src/state/index.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Theme slice (for light/dark toggle example)
const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: "light" },
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = themeSlice.actions;

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export default store;
