import React, { useState } from 'react';
import SearchBar from './SearchBar'
import data from '../data.json'
import ResultBox from './ResultBox';

export default function SearchArea() {

  const [spaceships, setSpaceships] = useState([])
  const [allSpaceships, setAllSpaceships] = useState(data)

  const filterSpaceshipList = (searchedSpaceship) => {
    if (searchedSpaceship.length === 0) {
      setSpaceships([])
    }
    else {
      const filteredSpaceships = allSpaceships.filter((spaceship) => {
        return spaceship.name.toLowerCase().startsWith(searchedSpaceship.toLowerCase());
      })
      setSpaceships([...filteredSpaceships])
    }
  }

  return <div className="my-8 bg-white rounded h-fit w-9/12">
    <SearchBar filterSpaceshipList={filterSpaceshipList} />
    {spaceships.map((spaceship) => {
      return (
        <ResultBox
          key={spaceship._id}
          spaceshipList={spaceship}
          spaceshipImage={'https://source.unsplash.com/1600x900/?space-shuttle'}
        />
      )
    })}
  </div>;
}


