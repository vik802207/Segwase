import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, rowData }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  if (!isOpen) return null;

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`preview-modal-overlay ${isFullScreen ? 'full-screen' : ''}`}>
      <div className={`preview-modal-content ${isFullScreen ? 'full-screen-modal' : ''}`}>
        <div className="preview-modal-header">
          <button className="close-btn" onClick={onClose}>X</button>
          <button className="full-screen-btn" onClick={toggleFullScreen}>
            {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
          </button>
        </div>
        <div className="preview-modal-body">
          <h2>Preview of Row Data</h2>
          <pre>{JSON.stringify(rowData, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default Modal;
