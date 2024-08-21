import React from 'react'
import Widget from './Widget'

const Category = ({ category, onAddWidget }) => {
  return (
    <div className="mb-8">
      <div className="mb-4 bg-blue-600 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white">{category.name}</h2>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 flex flex-wrap gap-4">
          {category.widgets.map((widget) => (
            <Widget key={widget.id} categoryId={category.id} widget={widget} />
          ))}
        </div>
        <div className="flex justify-end items-start">
          <button
            onClick={onAddWidget}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            + Add Widget
          </button>
        </div>
      </div>
    </div>
  )
}

export default Category
