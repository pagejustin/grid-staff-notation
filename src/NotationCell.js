import React from 'react';
import './NotationCell.css';

const NotationCell = ({ onClick, hasCircle }) => {
  return (
    <div className="notation-cell" onClick={onClick}>
      {hasCircle && <div className="circle"></div>}
    </div>
  );
};

export default NotationCell;
