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

export default function CatDisplay({setCurrentScore, setBestScore, numberOfCats, cats}) {
    const [chosenCats, setChosenCats] = useState([]);
    const catPhotos = cats.map((cat) => 
        <div className="card" key={cat.id}>
            <img src={cat.url} alt="cat-photo" />
        </div>
    )

    const shuffledCatPhotos = shuffle(catPhotos);
    return (
        <div className="cat-display">
            {shuffledCatPhotos}
        </div>
    )
}