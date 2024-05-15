import { useState } from "react";
import rock from "./img/rock-emoji.svg";
import paper from "./img/paper-emoji.svg";
import scissors from "./img/scissors-emoji.svg";

const App = () => {
  const initial = {
    wins: 0,
    losses: 0,
    ties: 0,
    you: "",
    computer: "",
    status: "",
  };

  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem("score")) || initial
  );

  const chose = (n) => {
    let move = "";
    n === 0 && (move = "✊");
    n === 1 && (move = "✋");
    n === 2 && (move = "✌");
    return move;
  };

  const updateScore = (updates) => {
    const newScore = { ...score, ...updates };
    setScore(newScore);
    localStorage.setItem("score", JSON.stringify(newScore));
  };

  const draw = (a) => {
    updateScore({
      ties: score.ties + 1,
      you: a,
      computer: a,
      status: `Draw! You both chose ${a}`,
    });
  };

  const computerWins = (a, b) => {
    updateScore({
      losses: score.losses + 1,
      you: a,
      computer: b,
      status: "Computer Wins! 😥",
    });
  };

  const youWin = (a, b) => {
    updateScore({
      wins: score.wins + 1,
      you: a,
      computer: b,
      status: "You Won! 😎",
    });
  };

  const compare = (human, computer) => {
    human === computer && draw(human);
    human === "✊" && computer === "✋" && computerWins(human, computer);
    human === "✋" && computer === "✊" && youWin(human, computer);
    human === "✌" && computer === "✊" && computerWins(human, computer);
    human === "✊" && computer === "✌" && youWin(human, computer);
    human === "✋" && computer === "✌" && computerWins(human, computer);
    human === "✌" && computer === "✋" && youWin(human, computer);
  };

  const play = (n) => {
    const human = chose(n);
    const computer = chose(Math.round(Math.random() * 2));
    compare(human, computer);
  };

  return (
    <div className="grid place-items-center h-svh bg-blue-700">
      <div className="grid md:grid-flow-col gap-10">
        <div onClick={() => play(0)} className="play-btn">
          <img className="icon" src={rock} />
          <span>Rock</span>
        </div>
        <div onClick={() => play(1)} className="play-btn">
          <img className="icon" src={paper} />
          <span>Paper</span>
        </div>
        <div onClick={() => play(2)} className="play-btn">
          <img className="icon" src={scissors} />
          <span>Scissors</span>
        </div>
      </div>
      <p className="text-center">
        You: {score.you} , Computer: {score.computer}
        <br />
        {score.status}
      </p>
      <div className="flex justify-center gap-10">
        <p>Wins: {score.wins}</p>
        <p>Losses: {score.losses}</p>
        <p>Ties: {score.ties}</p>
      </div>
      <button
        className="bg-blue-500 mx-auto px-4 py-1 rounded-full"
        onClick={() => {
          setScore(initial);
          localStorage.setItem("score", JSON.stringify(initial));
        }}>
        Reset Score
      </button>
    </div>
  );
};

export default App;
