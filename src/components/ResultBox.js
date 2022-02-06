import React from 'react';

export default function ResultBox({ resultList }) {
    return <div className='bg-white flex'>
        <img className="h-16 w-16 object-cover ml-2 mb-2 rounded" src='https://source.unsplash.com/1600x900/?space-shuttle' alt='space' />
        <div className='ml-2'> {resultList.name} <br></br>
      {resultList.manufacturer} | Crew: {resultList.crew}</div>
    </div>
}
