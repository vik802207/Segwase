import React, { useState } from 'react';
import './DataTable.css';
import Modal from './Modal'; // Import the PreviewModal component

const DataTable = ({ data, onRowClick }) => {
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
  const [selectedRowData, setSelectedRowData] = useState(null); // Store selected row data for modal

  if (data.length === 0) return <p className="datatable-no-data">No data available.</p>;

  const headers = Object.keys(data[0]);

  const sorted = [...data].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];

    if (aVal == null) return 1;
    if (bVal == null) return -1;

    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    }

    return sortOrder === 'asc'
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  const totalPages = Math.ceil(sorted.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = sorted.slice(startIndex, endIndex);

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const handleRowsChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // Handle row click to open modal
  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="datatable-container">
      <table className="datatable-table">
        <thead>
          <tr>
            {headers.map((key) => (
              <th key={key} onClick={() => handleSort(key)}>
                {key} {sortKey === key && (sortOrder === 'asc' ? '▲' : '▼')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, idx) => (
            <tr key={idx} onClick={() => handleRowClick(row)}>
              {headers.map((key) => (
                <td key={key}>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="datatable-footer">
        <div className="datatable-left">
          <label>
            Rows per page:
            <select value={rowsPerPage} onChange={handleRowsChange}>
              {[10, 20, 50, 100].map((val) => (
                <option key={val} value={val}>{val}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="datatable-center">
          Showing {startIndex + 1}–{Math.min(endIndex, sorted.length)} of {sorted.length}
        </div>

        <div className="datatable-right">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Preview Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        rowData={selectedRowData} 
      />
    </div>
  );
};

export default DataTable;
