import React from "react";
import TableCell from "./TableCell";

function TableRow(props) {
  let tableColumns = [];
  for (let i = -1; i < props.columns; i++) {
    tableColumns.push(
      <TableCell key={i} color={props.color} changeColor={props.changeColor} />
    );
  }
  return <tr>{tableColumns}</tr>;
}

export default TableRow;
