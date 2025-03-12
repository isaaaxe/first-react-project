import { useEffect, useState, useRef } from "react";

export default function Timer({ seconds, endGame, className }) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const timer = useRef();
  useEffect(() => {
    if (timeLeft <= 0) return;

    timer.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0 && timer.current) {
      clearInterval(timer.current);
      endGame();
    }
  }, [timeLeft]);

  return (
    <p className={className}>
      <strong>{timeLeft}</strong>
    </p>
  );
}
