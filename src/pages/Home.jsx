import React from 'react'
import Product from '../components/Product'
import { useSelector } from 'react-redux'


function Home() {
  const products = useSelector((state) => state.products)

  return (
    <div className="products-container">
        {
          products.map((item) => {
            return (
              <Product
                productId={item.id}
                key={item.id}
                title={item.title}
                rating={item.rating.rate}
                price={item.price}
                imageUrl={item.image} />
            )
          })
        }

      </div>
  )
}

export default Home
