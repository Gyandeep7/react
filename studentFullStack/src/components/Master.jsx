import React from 'react'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Navbar from './Navbar';
import AddStudent from './AddStudent';
import Home from './Home';

const Master = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/addstudent" element={<AddStudent></AddStudent>}></Route>
     </Routes>
    
    </BrowserRouter>
    </>
  )
}
export default Master;
