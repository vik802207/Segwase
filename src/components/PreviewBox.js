import React from 'react';
import './PreviewBox.css';

const PreviewBox = ({ row, onClose }) => {
  if (!row) return null;

  return (
    <div className="preview-box">
      <div className="preview-header">
        <h4 className="title">Row Preview</h4>
        <button onClick={onClose} className="close-btn">X</button>
      </div>
      <ul className="preview-content">
        {Object.entries(row).map(([key, val]) => (
          <li key={key} className="preview-item">
            <strong>{key}:</strong> {val?.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviewBox;
