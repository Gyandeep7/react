import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Riyaz from './components/Parent.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Riyaz></Riyaz>
  </React.StrictMode>
  </BrowserRouter>,
)
