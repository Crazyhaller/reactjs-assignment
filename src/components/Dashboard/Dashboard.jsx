import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Category from './Category'
import AddWidgetModal from '../UI/AddWidgetModal'
import SearchWidget from '../UI/SearchWidget'

const Dashboard = () => {
  const categories = useSelector((state) => state.categories.categories || [])
  const filteredCategories = useSelector(
    (state) => state.categories.filteredCategories || []
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategoryId, setActiveCategoryId] = useState(null)
  const [activeCategoryName, setActiveCategoryName] = useState('')

  const handleOpenModal = (categoryId) => {
    setActiveCategoryId(categoryId)
    setActiveCategoryName(
      categories.find((category) => category.id === categoryId).name
    )
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setActiveCategoryId(null)
  }

  const displayedCategories =
    filteredCategories.length > 0 ? filteredCategories : categories

  return (
    <div className="p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
      <SearchWidget />
      {displayedCategories.length > 0 ? (
        displayedCategories.map((category) => (
          <Category
            key={category.id}
            category={category}
            onAddWidget={() => handleOpenModal(category.id)}
          />
        ))
      ) : (
        <p className="text-white">No categories available.</p>
      )}
      {isModalOpen && (
        <AddWidgetModal
          categoryId={activeCategoryId}
          categoryName={activeCategoryName}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default Dashboard
