// rxslice

import { createSlice } from "@reduxjs/toolkit";
// lay du lieu khi user reload trang
// let userData = localStorage.getItem("USER_LOGIN")
//   ? JSON.parse(localStorage.getItem("USER_LOGIN"))
//   : null;
const initialState = {
  dataLogin: localStorage.getItem("USER_LOGIN")
    ? JSON.parse(localStorage.getItem("USER_LOGIN"))
    : null,
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
