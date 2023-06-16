import React from "react";
import TableCell from "./TableCell";

function TableRow(props) {
  let tableColumns = [];
  for (let i = 0; i < props.columns; i++) {
    tableColumns.push(<TableCell key={i} />);
  }
  return <tr>{tableColumns}</tr>;
}

export default TableRow;
