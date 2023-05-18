import React, { useContext } from 'react'
import bucket1 from './Store6';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Newstudent() {
  const ContextData=useContext(bucket1);
  const navi=useNavigate();
  const naviii=useNavigate();
  const NewObj={
    name:"",
    age:'',
    Course:"",
    Batch:"",
  }
  const handleChange=(e)=>{
    NewObj[e.target.name]=e.target.value;
  }
  const handleClick=()=>{
    ContextData.entries.push(NewObj);
    navi('/students');
    console.log(ContextData);
  }
  const handlecancel=()=>{
    naviii(-1);
  }
  return (
    <div className='body'>
      <div className='nav'><Link className='navt1' to="/">Home</Link>
      <Link className='navt2' to="/students">Students</Link>
      <Link className='navt3' to="/contact">Contact</Link>
      </div>
      <label className='Name'>Name</label>
      <label className='Age'>Age</label>
      <label className='Course'>Course</label>
      <label className='Batch'>Batch</label>
      <div className='editing'>
      <input className='Nameip' name="name" placeholder='Enter Name' onChange={handleChange}/>
      <input className='Aageip' name="age" placeholder='Enter Age' onChange={handleChange}/>
      <input className='Courseip' name="Course" placeholder='Enter Course' onChange={handleChange}/>
      <input className='Batchip' name="Batch" placeholder='Enter batch' onChange={handleChange}/>
      </div>
      <button className='Cancel' onClick={handlecancel}>Cancel</button>
      <button className='Update' onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Newstudent
