import '../App.css'
import ServiceList from './ServiceList'

const AccordionService = ({title,open, setOpen}) => {

     const showItems = () => {
          setOpen()
     }
  return (
    <div>
     <div className='container'>
     <div className='flex'>
          <h2>{title}</h2>
          <div>
          <button onClick={showItems}>Show</button>
          </div>
     </div>
     {
          open &&   <ServiceList />
     }
     </div>
    </div>
  )
}

export default AccordionService