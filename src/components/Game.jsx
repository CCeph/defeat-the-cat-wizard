import { useEffect, useState } from "react";
import "../styles/Game.css"
import CatDisplay from "./CatDisplay";

export default function Game({
  currentScore, setCurrentScore,
  bestScore, setBestScore,
  setLastScore,
  initialPopupVisibile,
  losePopupVisible, setLosePopupVisible,
  winPopupVisible, setWinPopupVisible}) {

  const [numberOfCats, setNumberOfCats] = useState(10);
  const [cats, setCats] = useState([]);
  const [callNewImages, setCallNewImages] = useState(true);
  useEffect(() => {
    fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_O4dzD01s7D9AixxR03lHboS5hbt3UlmN7qrxMps5N56q8x31KgjglLgSGtdxXkoR",
    )
      .then((response) => response.json())
      .then((data) => setCats(data));
  }, [callNewImages]);
  return (
    <div className={"game "
    + (initialPopupVisibile && " blur")
    + (losePopupVisible && " blur ")
    + (winPopupVisible && " blur ")}>
      <div className="scoreboard">
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <CatDisplay currentScore={currentScore} setCurrentScore={setCurrentScore} bestScore={bestScore} setBestScore={setBestScore} numberOfCats={numberOfCats} cats={cats} callNewImages={callNewImages} setCallNewImages={setCallNewImages}
      setLosePopupVisible={setLosePopupVisible}
      setWinPopupVisible={setWinPopupVisible}
      setLastScore={setLastScore}></CatDisplay>
    </div>
  );
}
