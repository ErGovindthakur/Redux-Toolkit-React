import React, { useState } from 'react'
import Accordion from './Accordion'

const MyServeList = () => {
  const [open,setOpen] = useState(0)
  return (
    <>
    <h1>My Service List</h1>
    <div>{
     ["Apple","Mango","Banana","Orange","Grapes"].map((items,index) => (
          <Accordion 
           key={index}
           items={items}
           open={open === index ? true : false}
           setOpen ={() => setOpen(index)}
           />
     ))
    }</div>
    </>
  )
}

export default MyServeList