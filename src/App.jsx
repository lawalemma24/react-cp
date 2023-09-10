import React from 'react'
import Productcard from './Components/Productcard'
import products from './productdata.js'
// productData.js

const App = () => {
  console.log("database", products)
  return (
    <div>
      {products.map(product => (<Productcard price={product.price} name={product.name} image={product.image} description={product.description}/>)) }
    <h2>Hello EMMANUEL</h2>
    </div>
  )
}

export default App