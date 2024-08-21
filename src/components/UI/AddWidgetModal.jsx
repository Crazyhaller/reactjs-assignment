import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWidget } from '../../redux/slices/categoriesSlice'

const AddWidgetModal = ({ categoryId, categoryName, onClose }) => {
  const [widgetName, setWidgetName] = useState('')
  const [widgetText, setWidgetText] = useState('')
  const dispatch = useDispatch()

  const handleAddWidget = () => {
    if (widgetName.trim() === '' || widgetText.trim() === '') return

    const newWidget = {
      id: `w${Date.now()}`,
      name: widgetName,
      text: widgetText,
    }

    dispatch(addWidget({ categoryId, widget: newWidget }))
    onClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-end bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-md h-full w-1/2">
        <h2 className="text-lg font-bold mb-4">Add New Widget</h2>
        <h3 className="text-md font-semibold mb-4">Category: {categoryName}</h3>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <textarea
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 mr-2 text-gray-600 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleAddWidget}
            className="px-4 py-2 text-white bg-blue-600 rounded"
          >
            Add Widget
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddWidgetModal
