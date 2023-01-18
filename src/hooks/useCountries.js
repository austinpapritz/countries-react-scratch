import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);
  const filterContinents = () => {
    if (continent === 'All') return countries;
    return countries.filter((country) => country.continent);
  };
  return { filterContinents, continent, setContinent };
}
