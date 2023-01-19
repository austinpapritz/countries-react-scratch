import React from 'react';
import { useCountries } from '../../hooks/useCountries.js';

import './Main.css';

import CountryCard from '../CountryCard/CountryCard.js';
import Select from '../Select/Select.js';
import Search from '../Search/Search.js';

export default function Main() {
  const {
    continent,
    setContinent,
    filterCountries,
    error,
    search,
    setSearch,
    searchCountries,
    filteredCountries,
    setFilteredCountries,
    countries,
  } = useCountries();

  return (
    <main>
      <label>Filter by Continent: </label>
      <Select
        continent={continent}
        setContinent={setContinent}
        setFilteredCountries={setFilteredCountries}
        countries={countries}
      />
      <label>Search: </label>
      <Search search={search} setSearch={setSearch} />
      <div className="card-container">
        {filteredCountries.map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
      {error}
    </main>
  );
}
