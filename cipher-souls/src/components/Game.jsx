import React, { useState, useEffect } from "react";
import Timer from "./Timer";

const Game = ({ scrambledWord, handleSubmitAnswer, score, time }) => {
const [answer, setAnswer] = useState("");

const handleChange = (e) => {
setAnswer(e.target.value);
};

const handleSubmit = () => {
handleSubmitAnswer(answer);
setAnswer(""); // Reset input after submitting
};

return (
<div>
    <h2>Score: {score}</h2>
    <p>Time: {time}s</p>
    <p>{scrambledWord}</p>
    <input
    type="text"
    value={answer}
    onChange={handleChange}
    placeholder="Unscramble the word"
    />
    <button onClick={handleSubmit}>Submit</button>
    <Timer time={time} />
</div>
);
};

export default Game;
