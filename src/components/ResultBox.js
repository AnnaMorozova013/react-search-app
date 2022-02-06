import React from 'react';

export default function ResultBox({ resultList }) {
    return <div>
        <img src='https://source.unsplash.com/1600x900/?space-shuttle' alt='space' />
        {resultList.name}
        <p>{resultList.manufacturer}</p>
        <p>Crew: {resultList.crew}</p>
    </div>;
}
