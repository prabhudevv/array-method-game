import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const max = 90;
  const [arrayItems, setArrayItems] = useState([]);
  const [arrLen, setArrLen] = useState(0);
  const [insertAtIndex, setInsertAtIndex] = useState(0);
  const [removeAtIndex, setRemoveAtIndex] = useState(0);
  const emoji = ["✌", "😂", "😝", "😁", "😱", "👉", "🙌", "🍻", "🔥", "🌈", "☀", "🎈", "🌹", "💄", "🎀", "⚽", "🎾", "🏁", "😡", "👿", "🐻", "🐶", "🐬", "🐟", "🍀", "👀", "🚗", "🍎", "💝", "💙", "👌", "❤", "😍", "😉", "😓", "😳", "💪", "💩", "🍸", "🔑", "💖", "🌟", "🎉", "🌺", "🎶", "👠", "🏈", "⚾", "🏆", "👽", "💀", "🐵", "🐮", "🐩", "🐎", "💣", "👃", "👂", "🍓", "💘", "💜", "👊", "💋", "😘", "😜", "😵", "🙏", "👋", "🚽", "💃", "💎", "🚀", "🌙", "🎁", "⛄", "🌊", "⛵", "🏀", "🎱", "💰", "👶", "👸", "🐰", "🐷", "🐍", "🐫", "🔫", "👄", "🚲", "🍉", "💛", "💚"];

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    setArrayItems(arrayItems);
  }, [arrayItems, arrLen])

  const pushClick = () => {
    arrayItems.push(emoji[getRandomInt(max)]);
    setArrLen(arrayItems.length);
  }

  const popClick = () => {
    arrayItems.pop();
    setArrLen(arrayItems.length);
  }

  const unshiftClick = () => {
    arrayItems.unshift(emoji[getRandomInt(max)]);
    setArrLen(arrayItems.length);
  }

  const shiftClick = () => {
    arrayItems.shift();
    setArrLen(arrayItems.length);
  }

  const insertAtClick = () => {
    arrayItems.splice(insertAtIndex, 0, emoji[getRandomInt(max)]);
    setArrLen(arrayItems.length);
    setInsertAtIndex(0);
  }

  const removeAtClick = () => {
    arrayItems.splice(removeAtIndex, 1);
    setArrLen(arrayItems.length);
    setRemoveAtIndex(0);
  }

  const onChangeInsertAt = (value) => {
    setInsertAtIndex(value);
  }

  const onChangeRemoveAt = (value) => {
    setRemoveAtIndex(value);
  }

  return (
    <div className="App">
      <fieldset>
        <legend>Add item</legend>
        <button onClick={pushClick} id="insertItem">push</button>
        <button onClick={unshiftClick}>unshift</button>
        <button onClick={insertAtClick}>insert at</button>
        <input type="number" id="insertAt" name="insertAt" min="1" max="5" onChange={(e) => onChangeInsertAt(e.target.value)} value={insertAtIndex} />
      </fieldset>
      <fieldset>
        <legend>Remove item</legend>
        <button onClick={popClick}>pop</button>
        <button onClick={shiftClick}>shift</button>
        <button onClick={removeAtClick}>remove at</button>
        <input type="number" id="removeAt" name="insertAt" min="1" max="5" onChange={(e) => onChangeRemoveAt(e.target.value)} value={removeAtIndex} />
      </fieldset>
      <p id="list">[{arrayItems.toString()}]</p>
    </div>
  );
}

export default App;
