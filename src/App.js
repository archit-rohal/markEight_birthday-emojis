import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🥳": "Partying Face",
  "🙌": "Raise Hands",
  "🎂": "Birthday Cake",
  "🍰": "Short Cake",
  "🎈": "Balloon",
  "🎉": "Party Popper",
  "🎁": "Wrapped Gift",
  "🕯️": "Candle"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    const userInput = event.target.value;
    let meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry, we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    const meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emojis</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          key={emoji}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
