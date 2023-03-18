import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  posKey: 0,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    increasePos: (state) => {
      state.posKey += 1;
    },
    decreasePos: (state) => {
      if (state.posKey <= 0) {
        return;
      }
      state.posKey -= 1;
    },
  },
});

export const { setBoard, increasePos, decreasePos } = boardSlice.actions;

export default boardSlice.reducer;
