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
  //move all this to Main.js and figure it out
  const filterContinents = () => {
    if (continent === 'All') return countries;
    const filteredCountries = countries.filter((country) => country.continent);
    setCountries(filteredCountries);
  };
  return { countries, filterContinents, continent, setContinent };
}
