import React from 'react'
import { Link } from 'react-router-dom'
function Homee() {
  return (
    <div className='body'>
      <div className='nav'><Link className='navt1' to="/">Home</Link>
      <Link className='navt2' to="/students">Students</Link>
      <Link className='navt3' to="/contact">Contact</Link>
      </div>
      <p className='t1'>Home Page</p>
    
    </div>
  )
}

export default Homee
