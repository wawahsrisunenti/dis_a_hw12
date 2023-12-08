import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "./reduxToolkit"; // Import gameSlice dari reduxToolkit

const store = configureStore({
  reducer: {
    games: gameSlice.reducer,
  },
});

export default store;
