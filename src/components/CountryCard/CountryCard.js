import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <div className="details">
        <img
          src={`https://flagcdn.com/16x12/${iso2}.png`}
          srcSet={`https://flagcdn.com/32x24/${iso2}.png 2x, https://flagcdn.com/48x36/${iso2}.png 3x`}
          width="16"
          height="12"
          alt={`${name}`}
        />
        <div className="name">{name}</div>
      </div>
    </div>
  );
}
