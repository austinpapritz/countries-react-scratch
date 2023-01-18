import React from 'react';
import './Select.css';

export default function Select({ continent, setContinent }) {
  return (
    <select
      className="continent-select"
      value={continent}
      onChange={(e) => {
        setContinent(e.target.value);
      }}
    >
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="Antarctica">Antarctica</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="North America">North America</option>
      <option value="Oceania">Oceania</option>
      <option value="South America">South America</option>
    </select>
  );
}
