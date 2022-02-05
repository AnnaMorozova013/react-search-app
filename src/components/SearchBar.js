import React from 'react';

export default function SearchBar() {
  return <div>
    <form action="/" method="get" className="flex flex-row items-center">
    <div className="relative bg-slate-200 p-2 rounded-xl border-8 border-white w-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-5 absolute left-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input className="ml-10 bg-transparent !outline-none" type="text" placeholder="Search..." />
    </div>
    <div>
      <button type="button" class="mr-2 rounded text-white bg-gray-900 hover:bg-black font-medium text-m p-2 text-center">Search</button>
    </div>
  </form>
  </div>;
}
