import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <div className="details">
        <img src={`https://flagcdn.com/96x72/${iso2.toLowerCase()}.png`} alt={`${name}`} />
        <div className="name">{name}</div>
      </div>
    </div>
  );
}
