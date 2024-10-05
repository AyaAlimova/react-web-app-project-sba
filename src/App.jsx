import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import './App.css'
import Cart from './pages/cart/Cart.jsx'
import ProductList from './pages/shop/Shop.jsx'
import { useState } from 'react'


function App(){
  const [cart, setCart] = useState([])

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element={<ProductList cart = {cart} setCart={setCart} />}/>
          <Route path = "/cart" element={<Cart cart = {cart}/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}


export default App
