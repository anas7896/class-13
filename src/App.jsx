import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './screen/Products'
import Home from './screen/Home'


const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="products/:id" element={<Products />} />
        </Routes>
    </div>
  )
}

export default App;