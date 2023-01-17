import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name }) {
  return (
    <div className="country-card">
      <div className="details">
        <div className="name">{name}</div>
      </div>
    </div>
  );
}
