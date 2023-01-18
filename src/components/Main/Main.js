import React, { useState } from 'react';
import './Main.css';

import CountryCard from '../CountryCard/CountryCard.js';
import Select from '../Select/Select.js';

export default function Main() {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <Select setCountries={setCountries} />
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </>
  );
}
