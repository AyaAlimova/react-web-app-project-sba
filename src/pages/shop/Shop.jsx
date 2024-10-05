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
        <h1>PedroTech</h1>
      </div>
      <div className="products">
        
      </div>
    </div>
  )
}
