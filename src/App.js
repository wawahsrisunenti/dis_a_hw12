import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameSlice } from "./reduxToolkit";
import { Button, Text, Grid, GridItem, Center } from "@chakra-ui/react";
import "./App.css";

function Board() {
  const squares = useSelector((state) => state.games.squares);
  const status = useSelector((state) => state.games.status);
  const dispatch = useDispatch();

  function renderSquare(i) {
    return (
      <Button
        bg="blue.500"
        color="white"
        fontWeight="bold"
        p="2"
        rounded="md"
        onClick={() => dispatch(gameSlice.actions.selectSquare(i))}
      >
        {squares[i]}
      </Button>
    );
  }

  return (
    <Center h="100vh">
      <div>
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          STATUS: {status}
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap="4">
          <GridItem>{renderSquare(0)}</GridItem>
          <GridItem>{renderSquare(1)}</GridItem>
          <GridItem>{renderSquare(2)}</GridItem>
          <GridItem>{renderSquare(3)}</GridItem>
          <GridItem>{renderSquare(4)}</GridItem>
          <GridItem>{renderSquare(5)}</GridItem>
          <GridItem>{renderSquare(6)}</GridItem>
          <GridItem>{renderSquare(7)}</GridItem>
          <GridItem>{renderSquare(8)}</GridItem>
        </Grid>
        <Button
          bg="red.500"
          color="white"
          fontWeight="bold"
          p="2"
          mt="4"
          rounded="md"
          onClick={() => dispatch(gameSlice.actions.reset())}
        >
          Restart
        </Button>
      </div>
    </Center>
  );
}

function Game() {
  return (
    <div>
      <Board />
    </div>
  );
}

function App() {
  return <Game />;
}

export default App;
