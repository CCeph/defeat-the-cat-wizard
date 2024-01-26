import { useState } from "react";

export default function Game() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [numberOfCats, setNumberOfCats] = useState(10);
  const [cats, setCats] = useState([]);
  return <h1>The game is here</h1>;
}
