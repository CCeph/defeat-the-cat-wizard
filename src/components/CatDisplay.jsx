import { useState } from "react";

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export default function CatDisplay({callNewImages, setCallNewImages,currentScore, setCurrentScore, bestScore, setBestScore, numberOfCats, cats}) {
    const [chosenCats, setChosenCats] = useState([]);

    function handlePlayerChoice(e) {
        const chosenCatID = e.target.dataset.id;
        if (chosenCats.includes(chosenCatID)) {
            (currentScore > bestScore) && setBestScore(currentScore);
            setCurrentScore(0);
            setChosenCats([]);
            setCallNewImages(!callNewImages)
        } else {
            setCurrentScore(currentScore => currentScore + 1)
            setChosenCats([...chosenCats, chosenCatID])
        }
    }

    const catPhotos = cats.map((cat) => 
        <div className="card" key={cat.id}>
            <img src={cat.url} alt="cat-photo" data-id={cat.id} onClick={handlePlayerChoice}/>
        </div>
    )

    const shuffledCatPhotos = shuffle(catPhotos);
    return (
        <div className="cat-display">
            {shuffledCatPhotos}
        </div>
    )
}