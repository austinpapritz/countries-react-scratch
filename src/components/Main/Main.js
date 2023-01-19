import React from 'react';
import { useCountries } from '../../hooks/useCountries.js';

import './Main.css';

import CountryCard from '../CountryCard/CountryCard.js';
import Select from '../Select/Select.js';

export default function Main() {
  const { continent, setContinent, filterCountries, error } = useCountries('');

  return (
    <main>
      <Select continent={continent} setContinent={setContinent} />
      <div className="card-container">
        {filterCountries().map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
      {error}
    </main>
  );
}
