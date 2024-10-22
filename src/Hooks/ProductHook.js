import { useEffect, useState } from "react"


const ProductHook = (id) => {
    const [singleProduct,setSingleProduct] =  useState(null)

    useEffect(() => {
     handleSingleProduct()
    },[])

    const handleSingleProduct = async() => {
     try{ 
          const data = await fetch(`https://fakestoreapi.com/products/${id}`)
          const response = await data.json()
          setSingleProduct(response)
     }
     catch(err){
          console.log(err.message)
     }
    }
    return singleProduct
}

export default ProductHook

