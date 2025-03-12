import Timer from "./Timer";
import { motion } from "framer-motion";
import targetImg from "../assets/target.png";
import { useEffect, useRef, useState } from "react";

export default function GameBoard({ handleResults, gameState, setGameState }) {
  const [_renderer, setRerender] = useState("");
  const containerWidth = useRef();
  const containerHeight = useRef();
  const container = useRef();

  //used to re-render this page so as to get the game-board's
  //proportions AFTER it renders for the first time
  useEffect(() => {
    containerWidth.current = container.current.offsetWidth;
    containerHeight.current = container.current.offsetHeight;
    setRerender("what");
  }, []);

  function handleClick() {
    let x = Math.random();
    let y = Math.random();
    setGameState((prevGameState) => ({
      ...prevGameState,
      score: prevGameState.score + 1,
      xPos: x,
      yPos: y,
    }));
  }

  function CircleTarget({ xPos, yPos }) {
    return (
      <div className="circleBase" style={{ top: yPos, left: xPos }}>
        <img
          onClick={handleClick}
          src={targetImg}
          className="targetImg"
          alt="target"
        />
      </div>
    );
  }

  //the 0.8 is to account for margin issues

  const localxPos = gameState.xPos * containerWidth.current * 0.85;
  const localyPos = gameState.yPos * containerHeight.current * 0.85;

  return (
    <>
      <div className="game-header">
        <Timer endGame={handleResults} seconds={15} className="game-ui" />
        <motion.button
          onClick={handleResults}
          whileHover={{
            backgroundColor: "#a67b5b",
            color: "#f4ede1",
            scale: 1.2,
          }}
          className="game-ui"
        >
          End
        </motion.button>
      </div>
      <div className="game-score">{`Score: ${gameState.score}`}</div>
      <div className="game-board" ref={container}>
        {localxPos && localyPos && (
          <CircleTarget xPos={localxPos} yPos={localyPos} />
        )}
      </div>
    </>
  );
}
