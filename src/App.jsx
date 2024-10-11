import React from 'react'
import { Counter } from './app/Counter'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Service from './State/Service'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Service />} >

    </Route>
  )
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      
      <Counter />
    </div>
  )
}

export default App