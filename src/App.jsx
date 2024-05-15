import rock from "./img/rock-emoji.svg";
import paper from "./img/paper-emoji.svg";
import scissors from "./img/scissors-emoji.svg";

const App = () => {
  return (
    <div className="grid place-items-center h-svh bg-blue-700">
      <div className="grid md:grid-flow-col gap-10">
        <div className="play-btn">
          <img className="icon" src={rock} />
          <span>Rock</span>
        </div>
        <div className="play-btn">
          <img className="icon" src={paper} />
          <span>Paper</span>
        </div>
        <div className="play-btn">
          <img className="icon" src={scissors} />
          <span>Scissors</span>
        </div>
      </div>
      <p className="text-center">
        You: , Computer:
        <br />
      </p>
      <div className="flex justify-center gap-10">
        <p>Wins: </p>
        <p>Losses: </p>
        <p>Ties: </p>
      </div>
      <button className="bg-blue-500 mx-auto px-4 py-1 rounded-full">
        Reset Score
      </button>
    </div>
  );
};

export default App;
