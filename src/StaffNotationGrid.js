import React, { useState } from 'react';
import NotationCell from './NotationCell';
import './StaffNotationGrid.css';

const StaffNotationGrid = () => {
  const numRows = 5;
  const numCols = 6;
  const [selectedCell, setSelectedCell] = useState(null);

  const toggleCircle = (row, col) => {
    const cellId = `${row}-${col}`;
    setSelectedCell(selectedCell === cellId ? null : cellId);
  };

  return (
    <div className="staff-notation-grid">
      {[...Array(numRows)].map((_, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {[...Array(numCols)].map((_, colIndex) => (
            <NotationCell
              key={`${rowIndex}-${colIndex}`}
              onClick={() => toggleCircle(rowIndex, colIndex)}
              hasCircle={selectedCell === `${rowIndex}-${colIndex}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default StaffNotationGrid;
