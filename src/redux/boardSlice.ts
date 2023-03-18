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
  row: 0,
  correctWord: "CONES",
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    increasePos: (state) => {
      state.posKey ++;
    },
    decreasePos: (state) => {
      if (state.posKey <= 0) {
        return;
      }
      state.posKey --;
    },
    increaseRow: (state) => {
      state.row++;
    },
  },
});

export const { setBoard, increasePos, decreasePos, increaseRow} = boardSlice.actions;

export default boardSlice.reducer;
