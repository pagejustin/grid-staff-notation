import React, { useState } from 'react';
import NotationCell from './NotationCell';
import './StaffNotationGrid.css';

const StaffNotationGrid = () => {
  const numRows = 5;
  const numCols = 6;
  // Updated to use a Set
  const [selectedCells, setSelectedCells] = useState(new Set());

  const toggleCircle = (cellId) => {
    setSelectedCells(prevSelectedCells => {
      const newSelectedCells = new Set(prevSelectedCells);
      if (newSelectedCells.has(cellId)) {
        newSelectedCells.delete(cellId);
      } else {
        newSelectedCells.add(cellId);
      }
      return newSelectedCells;
    });
  };

  return (
    <div className="staff-notation-grid">
      {[...Array(numRows)].map((_, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {[...Array(numCols)].map((_, colIndex) => {
            const cellId = `${rowIndex}-${colIndex}`;
            return (
              <NotationCell
                key={cellId}
                onClick={() => toggleCircle(cellId)}
                hasCircle={selectedCells.has(cellId)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default StaffNotationGrid;
