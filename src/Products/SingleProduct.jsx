import React from 'react'
import { useParams } from 'react-router-dom'
import ProductHook from '../Hooks/ProductHook'

const SingleProduct = () => {
     const {id} = useParams()
     const mySingleProduct = ProductHook(id)
     console.log(mySingleProduct)

     if(mySingleProduct === null){
          return <h1>SingleProduct is loading</h1>
     }
  return (
     <div>
            <h1>Product ID: {id}</h1>
            <div>
                <h2>{mySingleProduct.title}</h2>
                <p>{mySingleProduct.description}</p>
                <p>Price: ${mySingleProduct.price}</p>
                <img src={mySingleProduct.image} alt={mySingleProduct.title} />
            </div>
        </div>
  )
}

export default SingleProduct



