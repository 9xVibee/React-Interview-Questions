// import { useState } from "react";
// import Cell from "./components/cell";

const App = () => {
  // const [colRowData, setColRowData] = useState([
  //   ["", "", "", ""],
  //   ["", "", "", ""],
  //   ["", "", "", ""],
  //   ["", "", "", ""],
  // ]);
  // const [isEditing, setIsEditing] = useState(false);
  // const [selected, setSelected] = useState({
  //   rowIdx: null,
  //   colIdx: null,
  // });

  // const handleClick = (rowIdx, colIdx) => {
  //   setSelected({ rowIdx, colIdx });
  //   if (rowIdx == selected.rowIdx && colIdx == selected.colIdx) {
  //     setIsEditing(true);
  //   }
  // };

  // return (
  //   <div>
  //     {colRowData.map((row, rowIdx) => {
  //       return (
  //         <div
  //           key={rowIdx}
  //           style={{
  //             display: "flex",
  //             gap: "1rem",
  //           }}
  //         >
  //           {row.map((_, colIdx) => (
  //             <Cell
  //               key={colIdx}
  //               selected={
  //                 selected.colIdx == colIdx && selected.rowIdx == rowIdx
  //                   ? true
  //                   : false
  //               }
  //               colRowData={colRowData}
  //               rowIdx={rowIdx}
  //               colIdx={colIdx}
  //               onClick={handleClick}
  //               isEditing={isEditing}
  //               setColRowData={setColRowData}
  //             />
  //           ))}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return <div>Hello, {this.props.name}!</div>;
};

export default App;
