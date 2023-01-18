import React from 'react';
import './Select.css';

export default function Select({ continent, setContinent }) {
  //handle filter to setCountry so it can get mapped in Main
  const handleOption = (e) => {
    setContinent(e.target.value);
  };
  return (
    <select className="continent-select" value={continent} onChange={handleOption}>
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
