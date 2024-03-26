import { useReducer, useState } from 'react'

import './App.css'
import Product from './components/Product'
import { useSelector } from 'react-redux'
function App() {
  const products = useSelector((state) => state.products)





  return (
    <>
      <div className="products-container">
        {
          products.map((item) => {
            return (
              <Product
                key={item.id}
                title={item.title}
                rating={item.rating.rate}
                price={item.price}
                imageUrl={item.image} />
            )
          })
        }

      </div>


    </>
  )
}

export default App
