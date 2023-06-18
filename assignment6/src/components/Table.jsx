import React, { useState } from "react";
import TableCell from "./TableCell";
import TableRow from "./TableRow";

function Table(props) {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(1);
  const [color, setColor] = useState("transparent");
  const [mouseDown, setmouseDown] = useState(false);

  const addRow = () => {
    setRows(rows + 1);
  };

  const addColumn = () => {
    setColumns(columns + 1);
  };

  const removeRows = () => {
    if (rows > 0) {
      setRows(rows - 1); 
    }
  }

  const removeColumns = () => {
      setColumns(columns - 1);
  }

  
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

  const handleMouseDown = () => {
    setmouseDown(true);
  }

  const handleMouseUp = () => {
    setmouseDown(false);
  }

  let table = [];
  for (let i = 0; i < rows; i++) {
    table.push(
      <TableRow 
        key={i} 
        columns={columns} 
        color={color} 
        mouseDown={mouseDown}
      />
    );
  }

  return (
    <div 
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div class="btn-group" role="group" aria-label="buttons">
        <button type="button" class="btn btn-primary" onClick={() => addRow()}>Add Rows</button>
        <button type="button" class="btn btn-primary" onClick={() => addColumn()}>Add Columns</button>
        <button type="button" class="btn btn-warning" onClick={() => removeRows()}>Remove Rows</button>
        <button type="button" class="btn btn-warning" onClick={() => removeColumns()}>Remove Columns</button>
        <button type="button" class="btn btn-danger" style={{width: '150px'}} onClick={() => clearAll()}>Clear All</button>
        <button type="button" class="btn btn-success" style={{width: '150px'}} onClick={() => fillAll()}>Fill All</button>


          <select class="form-select ms-3" id="color" value={color} onChange={handleColorChange} aria-label="Select color">
            <option value="transparent">--Select Color--</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="pink">Pink</option>
            <option value="maroon">Maroon</option>
            <option value="crimson">Crimson</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
            <option value="grey">Grey</option>
            <option value="brown">Brown</option>
          </select>
      </div>
      <table>
        <tbody>
          {table}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
