import { checkError, client } from './client.js';

export async function fetchCountries() {
  const resp = await client.from('countries').select('*');
  return checkError(resp);
}

export async function fetchContinents() {
  const resp = await client.from('country_continents').select('*');
  return checkError(resp);
}
