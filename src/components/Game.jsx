import { useEffect, useState } from "react";

export default function Game() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [numberOfCats, setNumberOfCats] = useState(10);
  const [cats, setCats] = useState([]);
  useEffect(() => {
    let ignore = false;
    fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_O4dzD01s7D9AixxR03lHboS5hbt3UlmN7qrxMps5N56q8x31KgjglLgSGtdxXkoR",
    )
      .then((response) => response.json())
      .then((data) => !ignore && setCats(data));
    return () => {
      ignore = true;
    };
  }, []);
  return <h1>The game is here</h1>;
}
