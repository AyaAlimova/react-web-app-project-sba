import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import './App.css'
import {Cart} from './pages/cart/Cart.jsx'
import {ProductList} from './pages/shop/Shop.jsx'


function App(){
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element={<ProductList />}/>
          <Route path = "/cart" element={<Cart />}/>
        </Routes>
      </Router>
      
    </div>
  );
}


export default App
