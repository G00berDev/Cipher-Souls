import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import "./styles/App.css";

function App() {
const [score, setScore] = useState(0);
const [time, setTime] = useState(0);
const [currentWord, setCurrentWord] = useState("");
const [scrambledWord, setScrambledWord] = useState("");
const [leaderboard, setLeaderboard] = useState([]);

useEffect(() => {
fetchLeaderboard();
}, []);

const fetchLeaderboard = async () => {
try {
    const response = await axios.get("http://localhost:5000/api/game/scores");
    setLeaderboard(response.data);
} catch (error) {
    console.error("Error fetching leaderboard", error);
}
};

const startNewGame = () => {
setScore(0);
setTime(0);
loadNewPuzzle();
};

const loadNewPuzzle = () => {
const words = ["cipher", "school", "puzzle", "javascript", "challenge"];
const word = words[Math.floor(Math.random() * words.length)];
setCurrentWord(word);
setScrambledWord(scrambleWord(word));
};

const scrambleWord = (word) => {
return word.split("").sort(() => 0.5 - Math.random()).join("");
};

const handleSubmitAnswer = (answer) => {
if (answer === currentWord) {
    setScore((prevScore) => prevScore + 1);
    loadNewPuzzle();
}
};

return (
<div className="App">
    <h1>Cipher School</h1>
    <Game
    scrambledWord={scrambledWord}
    handleSubmitAnswer={handleSubmitAnswer}
    score={score}
    time={time}
    />
    <Leaderboard leaderboard={leaderboard} />
</div>
);
}

export default App;
