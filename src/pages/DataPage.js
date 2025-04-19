import React, { useEffect, useState } from 'react';
import FilterPanel from '../components/FilterPanel';
import DataTable from '../components/DataTable';
import PreviewBox from '../components/PreviewBox';
import { extractFilterOptions } from '../utils/extractFilterOptions';
import AdvancedFilter from '../components/AdvancedFilter';
import './DataPageStyle.css'; // Import the CSS
import './DataPage.css'

const DataPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({});
  const [filterOptions, setFilterOptions] = useState({});
  const [previewRow, setPreviewRow] = useState(null);
  const [advancedFilter, setAdvancedFilter] = useState({
    column: '',
    condition: 'equal',
    value: '',
  });

  useEffect(() => {
    const raw = localStorage.getItem('segwiseData');
    if (raw) {
      const parsed = JSON.parse(raw);
      setData(parsed);

      const keys = Object.keys(parsed[0]);
      const initialFilters = keys.reduce((acc, k) => ({ ...acc, [k]: '' }), {});
      setFilters(initialFilters);
      setFilterOptions(extractFilterOptions(parsed));
      setFilteredData(parsed);
    }
  }, []);

  useEffect(() => {
    const result = data.filter((row) => {
      const passNormal = Object.entries(filters).every(([key, val]) => {
        if (key.endsWith('_condition')) return true;
        if (val === '') return true;
        return String(row[key]).toLowerCase().includes(val.toLowerCase());
      });

      const { column, condition, value } = advancedFilter;
      if (column && value !== '') {
        const rowVal = parseFloat(row[column]);
        const filterVal = parseFloat(value);

        if (!isNaN(rowVal) && !isNaN(filterVal)) {
          switch (condition) {
            case 'greater':
              return passNormal && rowVal > filterVal;
            case 'less':
              return passNormal && rowVal < filterVal;
            default:
              return passNormal && rowVal === filterVal;
          }
        } else {
          return passNormal && String(row[column]).toLowerCase().includes(value.toLowerCase());
        }
      }

      return passNormal;
    });

    setFilteredData(result);
  }, [filters, advancedFilter, data]);

  // Function to convert the filtered data to CSV
  const downloadCSV = () => {
    const headers = Object.keys(filteredData[0] || {});
    const rows = filteredData.map((row) =>
      headers.map((header) => `"${row[header] || ''}"`).join(',')
    );
    const csvContent = `data:text/csv;charset=utf-8,${headers.join(',')}\n${rows.join('\n')}`;
    
    const link = document.createElement('a');
    link.href = encodeURI(csvContent);
    link.download = 'filtered_data.csv';
    link.click();
  };

  return (
    <div className="data-page-container">
      <h2 className="page-title">Segwise Data Dashboard</h2>

      <AdvancedFilter
        filterRule={advancedFilter}
        headers={Object.keys(data[0] || {})}
        onChange={setAdvancedFilter}
        onApply={() => {}}
        onClear={() => setAdvancedFilter({ column: '', condition: 'equal', value: '' })}
      />

      <FilterPanel
        filters={filters}
        options={filterOptions}
        onChange={(key, val) => setFilters({ ...filters, [key]: val })}
        onClearAll={() => {
          const resetFilters = Object.keys(filters).reduce((acc, key) => ({ ...acc, [key]: '' }), {});
          setFilters(resetFilters);
          setAdvancedFilter({ column: '', condition: 'equal', value: '' });
        }}
      />

      <DataTable
        data={filteredData}
        onRowClick={(row) => setPreviewRow(row)}
      />

      <PreviewBox row={previewRow} onClose={() => setPreviewRow(null)} />

      {/* Download CSV Button */}
      <button className="download-btn" onClick={downloadCSV}>
        Download CSV
      </button>
    </div>
  );
};

export default DataPage;
