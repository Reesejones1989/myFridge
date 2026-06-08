import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import Nav from './components/Nav'
import About from './pages/About'
import Stock from './pages/Stock'
import Dashboard from './pages/Dashboard'

import './App.css'

function App() {

  return (
<div className='App'>
  <Nav/>
<Routes>
<Route path = "/" element={<Dashboard/>} />
<Route path = "/about" element={<About/>} />
<Route path = "/stocks/:symbol" element={<Stock/>} />
<Route path = "/stocks" element={<Dashboard/>} />

</Routes>

</div>
  )
}

export default App
