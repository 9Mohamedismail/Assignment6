import React, { useState } from "react";
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

  const changeColor = (color) => {
    setColor(color);
  };

  let table = [];
  for (let i = 0; i < rows; i++) {
    table.push(
      <TableRow
        key={i}
        columns={columns}
        color={color}
        changeColor={changeColor}
      />
    );
  }

  return (
    <div>
      <button onClick={() => addRow()}>Add Rows</button>
      <button onClick={() => addColumn()}>Add Columns</button>
      <select onChange={(e) => changeColor(e.target.value)}>
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
