import React, { useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import bucket1 from './Store6';
function Students() {
    const ContextData=useContext(bucket1);
    const Navi=useNavigate();
  return (
    <div className='body'>
    <div className='nav'><Link className='navt1' to="/">Home</Link>
      <Link className='navt2' to="/students">Students</Link>
      <Link className='navt3' to="/contact">Contact</Link>
      </div>
      <h1 className='headstudent'>Students Details</h1>
      <div className='add'><button onClick={()=>{Navi('/newstudent')}} className='addtext'>Add new student</button></div>

        <div className='table'>
            <table className='insidetable'>
                <thead>
                <tr className='tr'>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Course</td>
                    <td>Batch</td>
                    <td>Change</td>
                </tr>
                </thead>
                <tbody>
                    {ContextData.entries.map((item,index)=>{
                        return(
                            <tr key={index} className='tr'>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.Course}</td>
                                <td>{item.Batch}</td>
                                <td><Link to='/editstudent' state={{data:index}}>Edit</Link></td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>


    </div>
  )
}

export default Students
