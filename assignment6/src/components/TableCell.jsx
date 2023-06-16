import React from "react";

function TableCell(props) {
  return (
    <td
      className="cell"
      onClick={() => props.changeColor(props.color)}
      style={{ backgroundColor: props.color }}
    >
      {props.children}
    </td>
  );
}

export default TableCell;
