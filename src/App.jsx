import React, { useState } from 'react'
import { Counter } from './app/Counter'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Service from './State/Service'
import { useDispatch, useSelector } from 'react-redux'
import { hideName, showName } from './app/Slice2'
import Accordion from './Revise/Accordion'
import Layout from './State/Layout'
import MyServeList from './Revise/MyServeList'
import Products from './Products/Products'
import SingleProduct from './Products/SingleProduct'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}  >
    <Route path='/' element={<Service />} />
    <Route path='myAcc' element={<MyServeList />} />
    <Route path='Products' element={<Products />} />
    <Route path='pr/:id' element={<SingleProduct />} />
    </Route>
  )
)

const App = () => {
  // const [color,setColor] = useState('black')

  // const Items = useSelector((store) => store.storeItems.addColor)
  // console.log(Items)

  // const dispatch = useDispatch()

  // const handleChangeColor = () => {
  //   dispatch(setColor(color === 'black' ? 'white': 'black'))
  // }

  const [name,setName] = useState('Govinda')

  const tellMyName = useSelector((store) => store.tell.myName)
  // console.log(tellMyName)

  // dispatching our function here

  const dispatch = useDispatch()

  const handleNameChanging = () => {
    dispatch(showName(setName(name === 'Govind' ? 'Prabhjot' : 'Govind')))
  }
  console.log(name)

  return (
    <div style={{
      width:'100%',
      height:'100vh',
      // background:color
    }}>
      <RouterProvider router={router} />
      <h1>
        {name}
      </h1>
      <button
      //  onClick={handleChangeColor} 
      onClick={handleNameChanging}
       style={{background:'white',color:'black'}}
       >
       Let's See
       </button>
      {/* <Counter /> */}
    </div>
  )
}

export default App