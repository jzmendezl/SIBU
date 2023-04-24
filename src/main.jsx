// Base
import React from 'react'
import ReactDOM from 'react-dom/client'
//Router
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'
// Global styles
import '@assets/styles/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
)
