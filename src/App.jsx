import "./App.css";
import QuoteBox from "./Component/QuoteBox";
import QuoteBoxBtn from "./Component/QuoteBoxBtn";
import phrases from "./Component/Phrase.json";
import { useState } from "react";

function App() {
  // Random phrase
  const randomPhrases = Math.floor(Math.random() * phrases.length);
  const [phrase, setPhrase] = useState(randomPhrases);

  // Random phrase button
  const changePhrase = () => {
    const randomPhrases = Math.floor(Math.random() * phrases.length);
    setPhrase(randomPhrases);
  };

  // Random colors
  const array = [
    "rgb(204, 222, 238)",
    "rgb(110, 177, 151)",
    "rgb(136, 103, 150)",
    "rgb(199, 184, 117)",
  ];
  const random = Math.floor(Math.random() * array.length);
  const color = array[random];

  document.body.style = `background:${color}`;
  return (
    <div className="App">
      <div className="App-all" style={{ color: color }}>
        <QuoteBox phrase={phrase} />
        <QuoteBoxBtn color={color} setPhrase={setPhrase} changePhrase={changePhrase} />
      </div>
    </div>
  );
}

export default App;
