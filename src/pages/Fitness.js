import { useState, useRef } from "react";
import IpptScore from "../components/IpptScore";

export default function FitnessPage() {
  const pushupSlider = useRef();
  const situpSlider = useRef();
  const runSlider = useRef();
  const ageSlider = useRef();
  const [ipptScore, setIpptScore] = useState({
    pushups: 30,
    situps: 30,
    run: 22,
    age: 24,
  });

  const totalRunTimeInSeconds = (Number(ipptScore.run) + 50) * 10;
  const runTimeMins = Math.floor(totalRunTimeInSeconds / 60);
  const runTimeSeconds = totalRunTimeInSeconds % 60;

  const runTiming = `${runTimeMins}mins ${runTimeSeconds}s`;

  function handleSlider(ipptEvent, ref) {
    setIpptScore((prevScore) => ({
      ...prevScore,
      [ipptEvent]: ref.current.value,
    }));
  }

  return (
    <>
      <div className="slider-container">
        <strong>
          <p>Push-ups</p>
        </strong>
        <input
          type="range"
          min="1"
          max="60"
          value={ipptScore.pushups}
          id="slider"
          ref={pushupSlider}
          onChange={() => handleSlider("pushups", pushupSlider)}
        />
        <div className="value" id="sliderValue">
          {ipptScore.pushups}
        </div>
      </div>
      <div className="slider-container">
        <strong>
          <p>Sit-ups</p>
        </strong>
        <input
          type="range"
          min="1"
          max="60"
          value={ipptScore.situps}
          id="slider"
          ref={situpSlider}
          onChange={() => handleSlider("situps", situpSlider)}
        />
        <div className="value" id="sliderValue">
          {ipptScore.situps}
        </div>
      </div>
      <div className="slider-container">
        <strong>
          <p>2.4km Timing</p>
        </strong>
        <input
          type="range"
          min="1"
          max="60"
          value={ipptScore.run}
          id="slider"
          ref={runSlider}
          onChange={() => handleSlider("run", runSlider)}
        />
        <div className="value" id="sliderValue">
          {runTiming}
        </div>
      </div>
      <div id="ippt-results"></div>
      <div className="slider-container">
        <strong>
          <p>Age</p>
        </strong>
        <input
          type="range"
          min="18"
          max="60"
          value={ipptScore.age}
          id="slider"
          ref={ageSlider}
          onChange={() => handleSlider("age", ageSlider)}
        />
        <div className="value" id="sliderValue">
          {ipptScore.age}
        </div>
      </div>
      <div>
        <IpptScore ipptScore={ipptScore} />
      </div>
    </>
  );
}
