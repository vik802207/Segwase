import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UploadPage.css';

const UploadPage = () => {
  const [files, setFiles] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    try {
      const res = await axios.post('https://segwase.onrender.com/upload', formData);
      localStorage.setItem('segwiseData', JSON.stringify(res.data));
      alert('Upload successful!');
      navigate('/data');
    } catch (err) {
      console.error('Upload failed', err);
      alert('Upload failed.');
    }
  };

  return (
    <div className="upload-page">
      <div className="upload-box">
        <h2><span className="upload-icon">📤</span> Upload CSV Files</h2>
        <input type="file" accept=".csv" multiple onChange={(e) => setFiles(e.target.files)} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
};

export default UploadPage;
