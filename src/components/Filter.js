// src/components/Filter.js
import React from 'react';

const Filter = ({ onFilter }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilter(name, value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        name="title"
        placeholder="Filter by title"
        onChange={handleFilterChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Filter by rating"
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
