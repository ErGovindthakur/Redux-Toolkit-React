import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCart = () => {

     const [product,setProduct] = useState([])

     useEffect(() => {
          handleProducts()
     },[])

     const handleProducts = async() => {
          try{
               const data = await fetch('https://fakestoreapi.com/products')
               const response = await data.json()
               console.log(response)
               setProduct(response)
          }
          catch(err){
               console.log(err.message)
          }

     }


  return product.length === 0 ? <h1>Product is Loading</h1> : (
    <div style={{
     width:"100%",
     height:"100%",
     display:"flex",
     gap:"5px",
     flexWrap:"wrap",
     justifyContent:"center",
    }}>
     {
          product.map((items) => (
               <Link key={items.id} to={`/pr/${items.id}`}>
               <div style={{
                    width:'270px',
                    border:'1px solid black'
               }}>
               <img 
               src={items.image} 
               alt='Product_1_img' 
               style={{width:'120px'}}     
               />
               <p>Category -: {items.category}</p>
               <p>Title -: {items.title}</p>
               <p>Price -: {items.price}</p>
               <p>Rating -: {items.rating.rate}</p>
               <button>Add to Cart</button>
               <button>Buy Now</button>
               </div>
               </Link>
          )
          )
     }
    </div>
  )
}

export default ProductCart