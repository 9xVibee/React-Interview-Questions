/* eslint-disable react/prop-types */

const Cell = ({
  setColRowData,
  selected,
  colRowData,
  onClick,
  isEditing,
  rowIdx,
  colIdx,
}) => {
  return (
    <>
      {isEditing && selected ? (
        <input
          placeholder={colRowData[rowIdx][colIdx]}
          value={colRowData[rowIdx][colIdx]}
          style={{
            border: selected ? "2px solid blue" : "2px solid black",
            height: "1rem",
            width: "10rem",
            marginTop: "0.9rem",
          }}
          onChange={(e) => {
            const latestData = [...colRowData];
            latestData[rowIdx][colIdx] = e.target.value;

            setColRowData(latestData);
          }}
        />
      ) : (
        <p
          style={{
            border: selected ? "2px solid blue" : "2px solid black",
            height: "1rem",
            width: "10rem",
          }}
          onClick={() => {
            onClick(rowIdx, colIdx);
          }}
          disabled
        >
          {colRowData[rowIdx][colIdx]}
        </p>
      )}
    </>
  );
};

export default Cell;
