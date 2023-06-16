import React, { useState } from "react";
import TableRow from "./TableRow";

function Table(props) {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const addRow = () => {
    setRows(rows + 1);
  };

  const addColumn = () => {
    setColumns(columns + 1);
  };

  let table = [];
  for (let i = 0; i < rows; i++) {
    table.push(<TableRow key={i} columns={columns} />);
  }

  return (
    <div>
      <button onClick={() => addRow()}>Add Rows</button>
      <button onClick={() => addColumn()}>Add Columns</button>
      <table>
        <div>{table}</div>
      </table>
    </div>
  );
}

export default Table;
