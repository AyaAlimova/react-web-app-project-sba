import React, { useEffect, useState } from 'react'

export const ProductList = () => {

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
            <button className='add-to-cart-btn'>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ProductList
