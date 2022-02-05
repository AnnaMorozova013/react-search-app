import React from 'react';

export default function ResultBox({ resultList }) {
  return <div>
      {resultList.name}
      <p>{resultList.manufacturer}</p>
      <p>Crew: {resultList.crew}</p>
  </div>;
}
