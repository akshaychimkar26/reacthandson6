import React, { useContext } from 'react'
import bucket1 from './Store6';
import { Link } from 'react-router-dom';
import { useLocation,useNavigate } from 'react-router-dom';
function Editstudent() {
    const ContextData=useContext(bucket1);
    const Navi=useNavigate();
    const Navii=useNavigate();
    const index=useLocation().state.data;
    console.log(index);

  const updateObj={
    name:ContextData.entries[index].name,
    age:ContextData.entries[index].age,
    Course:ContextData.entries[index].Course,
    Batch:ContextData.entries[index].Batch,
  }

    const HandleChange=(e)=>{
        updateObj[e.target.name]=e.target.value;
    }
    const handleUpdate=()=>{
      ContextData.entries[index]=updateObj;
      Navi(-1);
    }
    const handleCancel=()=>{
      Navii(-1);
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
      <input className='Nameip' type='text' name='name' placeholder={ContextData.entries[index].name} onChange={HandleChange}/>
      <input className='Ageip' type='text' name='age' placeholder={ContextData.entries[index].age} onChange={HandleChange}/>
      <input className='Courseip' type='text' name='Course' placeholder={ContextData.entries[index].Course} onChange={HandleChange}/>
      <input className='Batchip' type='text' name='Batch' placeholder={ContextData.entries[index].Batch} onChange={HandleChange}/>
      
      </div>
      <button className='Cancel' onClick={handleCancel}>Cancel</button>
      <button className='Update' onClick={handleUpdate}>Update</button>
    
    </div>
  )
}

export default Editstudent
