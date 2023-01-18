import React from 'react';
import './Select.css';

import { useCountries } from '../../hooks/useCountries.js';

export default function Select({ setCountries }) {
  const countries = useCountries();

  const handleOption = (e) => {
    const continent = e.target.value;

    const filteredCountries = countries.filter((country) => country.continent === continent);
    setCountries(filteredCountries);
  };

  return (
    <select className="continent-select" onChange={handleOption}>
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
