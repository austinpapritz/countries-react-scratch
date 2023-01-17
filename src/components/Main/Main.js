import React from 'react';
import './Main.css';

import CountryCard from '../CountryCard/CountryCard.js';

import { useCountries } from '../../hooks/useCountries.js';

export default function Main() {
  const countries = useCountries();

  return (
    <>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </>
  );
}
