import React from 'react';

export default function ResultBox({ spaceshipList, spaceshipImage }) {
    
    return <div className='bg-white flex mb-2'>
        <img className="h-16 w-16 object-cover ml-2 rounded" src={spaceshipImage} alt='space' />
        <div className="flex items-center">
            <div>
                <p className="ml-2 text-black font-bold"> {spaceshipList.name} </p>
                <p className="ml-2 text-gray-600"> {spaceshipList.manufacturer} | Crew: {spaceshipList.crew} </p>
            </div>
        </div>
    </div>
}
