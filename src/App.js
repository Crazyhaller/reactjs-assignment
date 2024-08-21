import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <Dashboard />
      </div>
    </Provider>
  )
}

export default App
