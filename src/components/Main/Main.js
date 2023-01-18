import React from 'react';
import './Main.css';

import CountryCard from '../CountryCard/CountryCard.js';
import Select from '../Select/Select.js';

import { useCountries } from '../../hooks/useCountries.js';

export default function Main() {
  let i = 0;

  const { continent, setContinent, filterContinents } = useCountries();

  return (
    <>
      <Select continent={continent} setContinent={setContinent} />
      {filterContinents().map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </>
  );
}
