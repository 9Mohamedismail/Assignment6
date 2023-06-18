import React from "react";
import TableCell from "./TableCell";

function TableRow(props) {
  let tableColumns = [];
  for (let i = 0; i < props.columns; i++) {
    tableColumns.push(
      <TableCell 
        key={i} 
        color={props.color} 
        mouseDown={props.mouseDown}
      />
    );
  }
  return <tr>{tableColumns}</tr>;
}

export default TableRow;

