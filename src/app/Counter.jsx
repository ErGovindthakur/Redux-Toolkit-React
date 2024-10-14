import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItems } from './slice'

export const Counter = () => {
//  const cartItems =  useSelector((store) => store.storeItems.addColor)

//  const [addName,setAddName] = useState('white')

//  console.log(cartItems)

//  const dispatch = useDispatch()

//  const handleName = () => {
//    dispatch(addItems(setAddName(addName === 'white' ? 'Black' :'white')))
//  }
  return (
    <div style={{
      width:'100%',
      height:'100vh',
      // background:addName
    }}>
    {/* Counter App -: {addName} */}
    <button 
    // onClick={handleName}
    >Add Items</button>
    <button>Remove Items</button>
    </div>
  )
}

