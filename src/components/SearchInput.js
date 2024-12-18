
import axios from 'axios';
import React, { useState } from 'react'

const SearchInput = ({handleSearchSubmit,searchTerm,setSearchTerm}) => {

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
}
  
     
  
    return (
      <form className='flex items-center  ' onSubmit={handleSearchSubmit}>
      <input type='text' placeholder='search conversation' className='rounded-l-lg p-1 border-black'
        value={searchTerm} onChange={handleChange} ></input>
      
      <button type='submit' className='bg-slate-400  rounded-r-lg p-1 border border-black'>Search</button>
          
    </form>
  )
}

export default SearchInput