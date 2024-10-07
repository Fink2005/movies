// rxslice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataLogin: {},
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    // tao action de dispatch tu component
    setUserAction: (state, action) => {
      state.dataLogin = action.payload;
    },
  },
});

export const { setUserAction } = userSlice.actions;

export default userSlice.reducer;
