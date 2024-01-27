import { useState } from "react";
import Card from "./Card";

export default function CatDisplay({setCurrentScore, setBestScore, numberOfCats, cats}) {
    const [chosenCats, setChosenCats] = useState([]);
    const catPhotos = cats.map((cat) => 
        <Card key={cat.id}>
            <img src={cat.url} alt="cat-photo" />
        </Card>
    )
    return (
        <div className="cat-display">
            {catPhotos}
        </div>
    )
}