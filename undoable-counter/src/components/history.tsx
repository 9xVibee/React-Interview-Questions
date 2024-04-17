import { Data } from "../App";

interface HistoryProps {
  history: Data[];
}

const History = ({ history }: HistoryProps) => {
  return (
    <div>
      {history.map((item, idx) => {
        return (
          <p key={idx}>
            {item.action} ({item.cur + " -> " + item.final})
          </p>
        );
      })}
    </div>
  );
};

export default History;
