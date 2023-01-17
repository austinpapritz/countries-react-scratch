import { useEffect, useState } from 'react';
import { fetchCountries, fetchContinents } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);
  return countries;
}

export function useContinents() {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchContinents();
      setContinents(resp);
    };
    fetchData();
  }, []);
  return continents;
}
