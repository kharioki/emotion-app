import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "reducer",
  initialState: {
    theme: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = slice.actions;
export default slice.reducer;
