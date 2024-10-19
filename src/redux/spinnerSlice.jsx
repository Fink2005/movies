import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const spinnerSlice = createSlice({
  name: 'spinnerSlice',
  initialState,
  reducers: {
    turnOnLoading: (state, action) => {
      state.isLoading = true;
    },
    turnOffLoading: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { turnOffLoading, turnOnLoading } = spinnerSlice.actions;

export default spinnerSlice.reducer;
