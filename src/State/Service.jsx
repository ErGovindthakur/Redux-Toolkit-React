import React, { useState } from 'react'
import AccordionService from "./AccordionService";
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../app/slice';
import { hideName, showName } from '../app/Slice2';

const Service = () => {
     const [open, setOpen] = useState(0)

     const [name, setName] = useState('Er Alley Thakur')

     const myName = useSelector((store) => store.tell.myName)

     const dispatch = useDispatch()

     const handleChange = (e) => {
      dispatch(hideName(setName(e.target.value)))
     }

  return (
    <div>
    <h1>{name}</h1>
    <input
     onChange={handleChange}
     type='text' 
     value={name}
     placeholder='type your Name ' />

      <h1 className="heading">Filter Options</h1>
      {/* Applying the concept of lifting state up  */}
      {["Brand", "Men", "Women", "Kids", "Others"].map((title, index) => {
        return <AccordionService 
        key={index}
        title={title} 
        open={open === index ? true : false}
        setOpen={() => setOpen(index)}

        />;
      })}
    </div>
  );
};

export default Service;
