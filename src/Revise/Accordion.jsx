import React, { useState } from 'react'
import List from './List'

const Accordion = ({items,open,setOpen}) => {

     // const [open, setOpen] = useState(false)

     const handleOpen = () => {
          setOpen()
     }
  return (
    <div style={{
     width:'450px',
     padding:'0px 6px',
     borderRadius:'7px',
     border:'2px solid black'
    }}>

    <div style={{
     width:'100%',
     display:'flex',
     justifyContent:'space-between',
     padding:'1px, 4px',
     alignItems:'center',
    }}>

     <div>
          <h1 style={{fontSize:'22px'}}>{items}</h1>
     </div>
     <div>
          <button style={{
               padding:'4px 5px',
               outline:'none',
               background:'blue',
               color:'white',
          }}
          onClick={handleOpen}
          >Show Fruits</button>
     </div>

    </div>
    { open && <List /> }
    </div>
  )
}

export default Accordion