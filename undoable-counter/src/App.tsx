import { useState } from "react";
import History from "./components/history";

export type Data = {
  action: number;
  cur: number;
  final: number;
};

type ArrOfNumberType = {
  post: number[];
  neg: number[];
};

const arrOfNumbers: ArrOfNumberType = {
  post: [1, 10, 100],
  neg: [-100, -10, -1],
};

const App = () => {
  const [history, setHistory] = useState<Data[]>([]);
  const [removed, setRemoved] = useState<Data[]>([]);
  const [count, setCount] = useState<number>(0);

  const handleCountChange = (num: number) => {
    setHistory([
      ...history,
      {
        action: num,
        cur: count,
        final: count + num,
      },
    ]);
    setCount(count + num);
  };

  const handleUndo = () => {
    const obj = history.pop();
    if (obj) {
      setRemoved([...removed, obj]);
    }

    if (history.length == 0) setCount(0);
    else setCount(history[history.length - 1].final);

    setHistory([...history]);
  };

  const handleRedo = () => {
    const obj = removed.pop();
    if (obj) {
      setHistory([...history, obj]);
    }

    if (obj) setCount(obj?.final);

    setRemoved([...removed]);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-10">
        <h1>Undoable Counter</h1>
        <div className="flex gap-10">
          <button
            className={`py-2 px-4 rounded-md  ${
              history.length === 0
                ? "bg-gray-500 text-black"
                : "bg-black text-white"
            }`}
            disabled={history.length === 0}
            onClick={handleUndo}
          >
            Undo
          </button>
          <button
            className={`py-2 px-4 rounded-md  ${
              removed.length === 0
                ? "bg-gray-500 text-black"
                : "bg-black text-white"
            }`}
            disabled={removed.length === 0}
            onClick={handleRedo}
          >
            Redo
          </button>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-10">
            {arrOfNumbers.neg.map((num) => {
              return (
                <button
                  key={num}
                  className="py-2 px-4 bg-black rounded-md text-white"
                  onClick={() => {
                    handleCountChange(num);
                  }}
                >
                  {num}
                </button>
              );
            })}
          </div>
          <p className="text-5xl font-semibold">{count}</p>
          <div className="flex gap-10">
            {arrOfNumbers.post.map((num) => {
              return (
                <button
                  key={num}
                  className="py-2 px-4 bg-black rounded-md text-white"
                  onClick={() => {
                    handleCountChange(num);
                  }}
                >
                  {num}
                </button>
              );
            })}
          </div>
        </div>
        <History history={history} />
      </div>
    </div>
  );
};

export default App;
