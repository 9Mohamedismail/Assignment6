import React from "react";

function TableCell(props) {
  const { color, mouseDown } = props;

  const changeColor = (e) => {
    e.target.style.backgroundColor = color;
  }

  return (
    <td 
      className="cell" 
      onMouseOver={mouseDown ? changeColor : null}
      onMouseDown={changeColor}
    >
      {props.children}
    </td>
  );
}

export default TableCell;

