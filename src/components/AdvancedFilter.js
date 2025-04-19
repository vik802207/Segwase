import React from 'react';
import './AdvancedFilter.css'
const AdvancedFilter = ({ filterRule, headers, onChange, onApply, onClear }) => {
  return (
    <div className="advanced-filter-container">
      <div className="filter-item">
        <label className="filter-label">Column</label>
        <select
          value={filterRule.column}
          onChange={(e) => onChange({ ...filterRule, column: e.target.value })}
          className="filter-select"
        >
          <option value="">Select Column</option>
          {headers.map((header) => (
            <option key={header} value={header}>
              {header}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label className="filter-label">Condition</label>
        <select
          value={filterRule.condition}
          onChange={(e) => onChange({ ...filterRule, condition: e.target.value })}
          className="filter-select"
        >
          <option value="equal">Equal</option>
          <option value="greater">Greater Than</option>
          <option value="less">Less Than</option>
        </select>
      </div>

      <div className="filter-item">
        <label className="filter-label">Value</label>
        <input
          type="text"
          value={filterRule.value}
          onChange={(e) => onChange({ ...filterRule, value: e.target.value })}
          className="filter-input"
          placeholder="Enter value"
        />
      </div>

      <button
        onClick={onApply}
        className="button apply-button"
      >
        Apply
      </button>

      <button
        onClick={onClear}
        className="button clear-button"
      >
        Clear
      </button>
    </div>
  );
};

export default AdvancedFilter;
