import React, { useEffect, useState } from 'react'
import Cart from '../cart/Cart.jsx'

  const ProductList = ({cart, setCart}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((data) => {
      setProducts(data.products)
      setLoading(false)
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
      setLoading(false)
    })
  }, [])
 

  const handleAddToCart = (product) => {
    setCart ((prevCart) => {
      const updatedCart = [...prevCart, product]
      console.log("Updated Cart:", updatedCart)
      return updatedCart
    })
  }

  if(loading){
    return <p>Loading products...</p>
  }

  return (
    <div className='product-list'>
      <div className='shopTitle'>
        <h1>All Products</h1>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Rating:</strong> {product.rating} / 5</p>
            <div className='btn-container'>
            <button className='add-to-cart-btn' onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <Cart cart = {cart} />
    </div>
  )
}
export default ProductList
