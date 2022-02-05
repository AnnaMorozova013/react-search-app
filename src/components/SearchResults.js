import React, { useState } from 'react';
import SearchBar from './SearchBar'
import data from '../data.json'
import ResultBox from './ResultBox';

export default function SearchResults() {

  const [results, setResults] = useState(data)
  const [allResults, setAllResults] = useState([])

  const filterResultsList = (type) => {
    const filterResults = allResults.filter((result) => {
      return result.name.toLowerCase().startsWith(type.toLowerCase());
    })
    setResults(filterResults)
  }

  return <div className="my-8 bg-white rounded h-fit w-9/12">
    <SearchBar filterResultsList={filterResultsList} />
    {results.map((type) => {
    return (
    <ResultBox 
    key={type._id}
    resultList={type} /> 
    )
    })}
  </div>;
}


