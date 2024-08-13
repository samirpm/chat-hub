import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import MainRoute from './Routes/index'
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
    <Router>
      <MainRoute/>
      <ToastContainer />
    </Router>
  )
}

export default App