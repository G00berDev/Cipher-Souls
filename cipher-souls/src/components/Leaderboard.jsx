import React from "react";

const Leaderboard = ({ leaderboard }) => {
return (
<div>
    <h2>Leaderboard</h2>
    <ul>
    {leaderboard.map((entry, index) => (
        <li key={index}>
        {entry.playerName}: {entry.score} points, {entry.time}s
        </li>
    ))}
    </ul>
</div>
);
};

export default Leaderboard;
