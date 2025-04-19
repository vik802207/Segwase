import React, { useState } from 'react';
import axios from 'axios';
import './styles/App.css';

function App() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    const res = await axios.post('http://localhost:8000/upload', formData);
    setData(res.data);
  };

  return (
    <div className="App">
      <h1>Segwise CSV Uploader</h1>
      <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>

      {data.length > 0 && (
        <table>
          <thead>
            <tr>{Object.keys(data[0]).map((col) => <th key={col}>{col}</th>)}</tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((val, j) => <td key={j}>{val}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
