import React from 'react';
import './Main.css';

import CountryCard from '../CountryCard/CountryCard.js';
import Select from '../Select/Select.js';

import { useCountries } from '../../hooks/useCountries.js';

export default function Main() {
  //make a setCountry prop in Select using useState
  const { countries, continent, setContinent, filterContinents } = useCountries();

  return (
    <>
      <Select continent={continent} setContinent={setContinent} />
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </>
  );
}
