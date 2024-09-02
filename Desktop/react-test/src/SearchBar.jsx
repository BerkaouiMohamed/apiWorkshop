import React, { useState } from 'react'

function SearchBar({ setSearch,handleSearch}) {

  return (
    <div>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} />
       <button onClick={handleSearch}>search</button>
    </div>
  )
}

export default SearchBar