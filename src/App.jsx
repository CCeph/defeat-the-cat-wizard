import { useState } from "react";
import CenteredPopup from "./components/CenteredPopup";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CenteredPopup>
        <h1>Test</h1>
      </CenteredPopup>
    </>
  );
}

export default App;
