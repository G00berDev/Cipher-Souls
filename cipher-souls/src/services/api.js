import axios from "axios";

const api = axios.create({
baseURL: "http://localhost:5000/api/game", // Adjust according to your backend
});

export const getLeaderboard = async () => {
try {
const response = await api.get("/scores");
return response.data;
} catch (error) {
console.error("Error fetching leaderboard:", error);
}
};

export const submitScore = async (playerName, score, time) => {
try {
const response = await api.post("/scores", { playerName, score, time });
return response.data;
} catch (error) {
console.error("Error submitting score:", error);
}
};
