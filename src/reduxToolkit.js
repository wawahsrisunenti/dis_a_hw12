import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "games",
  initialState: {
    squares: Array(9).fill(null),
    status: "Next player: Anonymous",
  },
  reducers: {
    selectSquare: (state, action) => {
      const { squares, status } = state;
      const squareIndex = action.payload;
      if (squares[squareIndex] || calculateWinner(squares)) {
        return; // Do nothing if the box is filled or the game is already won
      }

      squares[squareIndex] = status.includes("X") ? "X" : "O";
      state.squares = squares;
      state.status = calculateStatus(squares, calculateWinner(squares));
    },
    reset: (state) => {
      state.squares = Array(9).fill(null);
      state.status = "Next player: Anonymous";
    },
  },
});

// Utility functions such as calculateWinner, calculateStatus, and calculateNextValue
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function calculateStatus(squares, winner) {
  if (winner) {
    return `Winner: ${winner}`;
  } else if (squares.every(Boolean)) {
    return "Tickity Tackity Toe";
  } else {
    return `Next player: ${calculateNextValue(squares)}`;
  }
}

function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
}
