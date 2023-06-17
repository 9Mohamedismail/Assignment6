import React, { useState } from "react";
import TableCell from "./TableCell";
import TableRow from "./TableRow";

function Table(props) {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [color, setColor] = useState("transparent");

  const addRow = () => {
    setRows(rows + 1);
  };

  const addColumn = () => {
    setColumns(columns + 1);
  };

  const clearAll = () => {
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "transparent";
    }
    setColor("transparent");
  };

  const fillAll = () => {
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = color;
    }
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  let table = [];
  for (let i = 0; i < rows; i++) {
    table.push(<TableRow key={i} columns={columns} color={color} />);
  }

  return (
    <div>
      <button onClick={() => addRow()}>Add Rows</button>
      <button onClick={() => addColumn()}>Add Columns</button>
      <button onClick={() => clearAll()}>Clear All</button>
      <button onClick={() => fillAll()}>Fill All</button>
      <select id="color" value={color} onChange={handleColorChange}>
        <option value="transparent">---</option>
        <option value="black">black</option>
        <option value="yellow">yellow</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="pink">pink</option>
      </select>
      <table>
        <div>{table}</div>
      </table>
    </div>
  );
}

export default Table;
