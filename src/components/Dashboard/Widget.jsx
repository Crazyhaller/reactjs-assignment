import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWidget } from '../../redux/slices/categoriesSlice'
import { FaTimes } from 'react-icons/fa'

const Widget = ({ categoryId, widget }) => {
  const dispatch = useDispatch()

  const handleRemoveWidget = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }))
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4 border-t-4 border-blue-500 relative w-80 mx-auto">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-blue-500">{widget.name}</h3>
          <p className="text-gray-400">{widget.text}</p>
        </div>
        <button
          onClick={handleRemoveWidget}
          className="text-red-300 hover:text-red-500 focus:outline-none absolute top-2 right-2"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Widget
