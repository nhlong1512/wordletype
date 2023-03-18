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
  key: "",
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
    setKey: (state, action) => {
        state.key = action.payload;
    }
  },
});

export const { setBoard, increasePos, decreasePos, increaseRow, setKey } = boardSlice.actions;

export default boardSlice.reducer;
