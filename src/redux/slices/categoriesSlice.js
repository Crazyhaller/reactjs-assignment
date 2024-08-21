import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [
    {
      id: 'c1',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'w1',
          name: 'Top 5 Policies',
        },
        {
          id: 'w2',
          name: 'Top 5 Resources',
        },
        {
          id: 'w3',
          name: 'Top 5 Compliance',
        },
      ],
    },
    {
      id: 'c2',
      name: 'CWPP Dashboard',
      widgets: [
        {
          id: 'w4',
          name: 'Top 5 Policies',
        },
        {
          id: 'w5',
          name: 'Top 5 Resources',
        },
        {
          id: 'w6',
          name: 'Top 5 Compliance',
        },
      ],
    },
  ],
  filteredCategories: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload
      const category = state.categories.find((cat) => cat.id === categoryId)
      if (category) {
        category.widgets.push(widget)
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload
      const category = state.categories.find((cat) => cat.id === categoryId)
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        )
      }
    },
    searchWidgets: (state, action) => {
      const searchTerm = action.payload.toLowerCase()
      if (searchTerm === '') {
        state.filteredCategories = []
      } else {
        state.filteredCategories = state.categories
          .map((category) => {
            return {
              ...category,
              widgets: category.widgets.filter((widget) =>
                widget.name.toLowerCase().includes(searchTerm)
              ),
            }
          })
          .filter((category) => category.widgets.length > 0)
      }
    },
  },
})

export const { addWidget, removeWidget, searchWidgets } =
  categoriesSlice.actions
export default categoriesSlice.reducer
