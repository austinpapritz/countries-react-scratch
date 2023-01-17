import React from 'react';
import './Main.css';

import CountryCard from '../CountryCard/CountryCard.js';

import { useCountries, useContinents } from '../../hooks/useCountries.js';

export default function Main() {
  let i = 0;

  const countries = useCountries();
  const continents = useContinents();

  return (
    <>
      <select className="continent-select">
        {continents.map((continent, i) => {
          i++;
          return (
            <option key={i} value={continent} className="option">
              {continent}
            </option>
          );
        })}
      </select>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </>
  );
}
