import React from 'react';
import './FilterPanel.css'; // Don't forget to import the CSS file

const FilterPanel = ({ filters, options, onChange, onClearAll }) => {
  return (
    <div className="filter-panel-container">
      {Object.keys(filters).map((key) => (
        <div key={key} className="filter-group">
          <label className="filter-label">{key}</label>
          <select
            className="filter-select"
            value={filters[key]}
            onChange={(e) => onChange(key, e.target.value)}
          >
            <option value="">All</option>
            {options[key]?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}

      <div className="clear-button-container">
        <button className="clear-all-button" onClick={onClearAll}>
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
