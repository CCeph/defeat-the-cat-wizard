import { useState } from "react";
import CenteredPopup from "./components/CenteredPopup";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CenteredPopup></CenteredPopup>
    </>
  );
}

export default App;
