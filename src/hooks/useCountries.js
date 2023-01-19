import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('All');
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
        setFilteredCountries(resp);
      } catch (e) {
        setError('Sorry something went wrong');
      }
    };
    fetchData();
  }, []);

  const searchCountries = (search) => {
    const searchedCountries = countries.includes(search);
    return setSearch(searchedCountries);
  };

  return {
    continent,
    setContinent,
    error,
    search,
    setSearch,
    searchCountries,
    filteredCountries,
    countries,
    setFilteredCountries,
  };
}
