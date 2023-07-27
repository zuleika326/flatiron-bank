/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import propTypes from "prop-types"
export const SearchBar = ({handleSearch})  => {
  return (
    <div action='' className=' mx-8 my-2'>
        <input type="text" name='search' className='border border-gray-300 w-full p-2 rounded' placeholder='search your recent transaction'onChange={handleSearch}  />

    </div>
  )
}

SearchBar.propTypes = {
    handleSearch: propTypes.any
  };