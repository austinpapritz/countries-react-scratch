import React from 'react';
import './Search.css';

export default function Search({ search, setSearch }) {
  return (
    <input
      type="text"
      className="country-search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    ></input>
  );
}
