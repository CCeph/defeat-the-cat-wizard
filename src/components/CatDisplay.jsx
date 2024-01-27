import { useState } from "react";

export default function CatDisplay({setCurrentScore, setBestScore, numberOfCats, cats}) {
    const [chosenCats, setChosenCats] = useState([]);
    const catPhotos = cats.map((cat) => 
        <div className="card" key={cat.id}>
            <img src={cat.url} alt="cat-photo" />
        </div>
    )
    return (
        <div className="cat-display">
            {catPhotos}
        </div>
    )
}