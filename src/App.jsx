import { useState } from "react";
import CenteredPopup from "./components/CenteredPopup";
import Game from "./components/Game";
import "./App.css";

function App() {
  const [initialPopupVisibile, setInitialPopupVisible] = useState(true);

  function hideInitialPopup() {
    setInitialPopupVisible(false);
  }

  return (
    <>
      <div
        className={
          initialPopupVisibile ? "main-background blur" : "main-background"
        }
      ></div>

      <Game initialPopupVisibile={initialPopupVisibile}></Game>

      <CenteredPopup initialPopupVisibile={initialPopupVisibile}>
        <h1>Defeat the Evil Cat Wizard</h1>
        <p>
          The cat wizard trapped all cats under his spell to build his own
          empire. We must defeat him to return the cats to their rightful
          owners. However, he is a cunning trickster. For each cat you save, he
          conjurs an illusion of an exact look-alike. Attempting to save an
          illusion will trap you under the wizard's spell, so move carefully!
        </p>
        <h2>Rules</h2>
        <ul>
          <li>Click on a cat's image to attempt to save it.</li>
          <li>After clicking an image, all images are shuffled.</li>
          <li>Don't click the same image twice.</li>
          <li>Try to choose all images without duplication.</li>
          <li>Defeat the cat wizard!</li>
        </ul>
        <button onClick={hideInitialPopup}>Venture Forth</button>
      </CenteredPopup>
    </>
  );
}

export default App;
