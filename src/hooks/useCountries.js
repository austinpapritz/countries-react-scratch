import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('All');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
      } catch (e) {
        setError('Sorry something went wrong');
      }
    };
    fetchData();
  }, []);

  const filterCountries = () => {
    if (continent === 'All') return countries;
    return countries.filter((country) => country.continent === continent);
  };
  return { filterCountries, continent, setContinent, error };
}
