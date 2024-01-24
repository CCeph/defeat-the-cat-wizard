import { useState } from "react";
import InitialPopup from "./components/InitialPopup";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <InitialPopup></InitialPopup>
    </>
  );
}

export default App;
