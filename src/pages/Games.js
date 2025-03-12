import { useState } from "react";
import { motion } from "framer-motion";
import GameBoard from "../components/GameBoard";
import Button from "../components/Button";

const localHS = () => Number(localStorage.getItem("highscore")) || 0;

export default function GamesPage() {
  const [gameState, setGameState] = useState({
    state: "idle",
    score: 0,
    highscore: localHS(),
    newHigh: false,
    xPos: 0.5,
    yPos: 0.5,
  });

  let content;

  function handleBegin() {
    setGameState((prevGameState) => ({
      ...prevGameState,
      state: "ongoing",
    }));
  }

  // function handleTargetClick() {
  //   let x = Math.random();
  //   let y = Math.random();
  //   setGameState((prevGameState) => {
  //     return {
  //       ...prevGameState,
  //       score: prevGameState.score + 1,
  //       xPos: x * GAME_BOARD_WIDTH,
  //       yPos: y * GAME_BOARD_HEIGHT,
  //     };
  //   });
  // }

  function handleExit() {
    setGameState((prevGameState) => ({
      ...prevGameState,
      state: "idle",
      score: 0,
      newHigh: false,
    }));
  }

  function handleReset() {
    setGameState((prevGameState) => ({
      ...prevGameState,
      state: "ongoing",
      score: 0,
      newHigh: false,
    }));
  }
  //   const handleResults = useCallback(() => {
  //     setGameState((prevGameState) => {
  //       if (prevGameState.score > prevGameState.highscore) {
  //         return {
  //           ...prevGameState,
  //           state: "results",
  //           highscore: prevGameState.score,
  //           newHigh: true,
  //         };
  //       } else {
  //         return {
  //           ...prevGameState,
  //           state: "results",
  //         };
  //       }
  //     });
  //   }, []);
  function handleResults() {
    setGameState((prevGameState) => {
      if (prevGameState.score > prevGameState.highscore) {
        localStorage.setItem("highscore", prevGameState.score);
        return {
          ...prevGameState,
          state: "results",
          highscore: prevGameState.score,
          newHigh: true,
        };
      } else {
        return {
          ...prevGameState,
          state: "results",
        };
      }
    });
  }

  //Starting state of games page
  if (gameState.state === "idle") {
    content = (
      <div className="game-intro">
        <h1>
          Welcome to Isaac's <strong>attempt</strong> at making a game!
        </h1>
        <p>(just an exercise to try out what I have learnt from React!)</p>
        <br />
        <p>
          Your task is to <strong>CLICK</strong> as many targets as fast as
          possible
        </p>
        <p>{`Current Highscore: ${gameState.highscore}`}</p>
        <Button click={handleBegin}>Let's Begin!</Button>
      </div>
    );
  }
  //The actual game itself, may need to purposely re-render this once
  if (gameState.state === "ongoing") {
    content = (
      <>
        <GameBoard
          handleResults={handleResults}
          gameState={gameState}
          setGameState={setGameState}
        />
      </>
    );
  }

  if (gameState.state === "results") {
    content = (
      <>
        <div className="game-header">
          <motion.button
            onClick={handleExit}
            whileHover={{
              backgroundColor: "#a67b5b",
              color: "#f4ede1",
              scale: 1.2,
            }}
          >
            Exit
          </motion.button>
          <motion.button
            onClick={handleReset}
            whileHover={{
              backgroundColor: "#a67b5b",
              color: "#f4ede1",
              scale: 1.2,
            }}
          >
            Reset
          </motion.button>
        </div>
        <div className="game-results">
          <div>{`Score: ${gameState.score}`}</div>
          <div>{`High Score: ${gameState.highscore}`}</div>
          {gameState.newHigh ? (
            <p>Wow! You've set a new High Score!</p>
          ) : (
            <p>Nice try!</p>
          )}
        </div>
      </>
    );
  }

  return <>{content}</>;
}
