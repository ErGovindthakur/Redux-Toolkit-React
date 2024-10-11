import React, { useState } from 'react'
import AccordionService from "./AccordionService";

const Service = () => {
     const [open, setOpen] = useState(0)
  return (
    <div>
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
