import React from 'react';
import "./style6.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homee from "./Components/Homee";
import Students from "./Components/Students";
import Contact from "./Components/Contact";
import { useState } from "react";
import bucket1 from './Components/Store6';
import Editstudent from "./Components/Editstudent";
import Newstudent from "./Components/Newstudent"
function App() {
  const[data,setData]=useState([
    {name:"Akshay",age:22,Course:"MERN",Batch:"Jan"},
    {name:"Aksh",age:24,Course:"MERN",Batch:"Jan"},
    {name:"Aksay",age:21,Course:"MEAN",Batch:"Jan"},
    {name:"Aksha",age:22,Course:"MEAN",Batch:"Jan"},
    {name:"Aksht",age:28,Course:"MERN",Batch:"Jan"},
    {name:"Aksau",age:26,Course:"MERN",Batch:"Jan"},
    {name:"Aksao",age:25,Course:"MEAN",Batch:"Jan"},
  ])

  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homee/>}></Route>
        <Route exact path="/students" element={
          <bucket1.Provider value={{entries:data,entriesFun:setData}}>
        <Students/>
        </bucket1.Provider>
        }></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/editstudent" element={
        <bucket1.Provider value={{entries:data,entriesFun:setData}}>
        <Editstudent/>
        </bucket1.Provider>
        }></Route>
        <Route exact path="/newstudent" element={
        <bucket1.Provider value={{entries:data,entriesFun:setData}}>
        <Newstudent/>
        </bucket1.Provider>
        }></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App