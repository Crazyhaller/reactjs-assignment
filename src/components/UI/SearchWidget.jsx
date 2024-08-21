import React from 'react'
import { useDispatch } from 'react-redux'
import { searchWidgets } from '../../redux/slices/categoriesSlice'

const SearchWidget = () => {
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    dispatch(searchWidgets(e.target.value))
  }

  return (
    <input
      type="text"
      placeholder="Search widgets..."
      onChange={handleSearch}
      className="w-full p-3 mb-6 rounded-lg border-none shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  )
}

export default SearchWidget
