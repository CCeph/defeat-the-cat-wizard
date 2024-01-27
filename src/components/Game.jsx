import { useEffect, useState } from "react";
import "../styles/Game.css"
import CatDisplay from "./CatDisplay";

export default function Game({initialPopupVisibile}) {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [numberOfCats, setNumberOfCats] = useState(10);
  const [cats, setCats] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_O4dzD01s7D9AixxR03lHboS5hbt3UlmN7qrxMps5N56q8x31KgjglLgSGtdxXkoR",
    )
      .then((response) => response.json())
      .then((data) => setCats(data));
  }, []);
  return (
    <div className={"game " + (initialPopupVisibile && "blur")}>
      <div className="scoreboard">
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <CatDisplay setCurrentScore={setCurrentScore} setBestScore={setBestScore} numberOfCats={numberOfCats} cats={cats}></CatDisplay>
    </div>
  );
}
