import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import { Link } from "react-router-dom"

const Todo = () => {
    const [arr,setArr]=useState([])
    const getall=async ()=>{
     const res=   await axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
     const {data}=res
    setArr(data)
    }
    useEffect(()=>{
        getall()
    },[])
  return (
   <>
   <table className='table table-bordered table-primary'>
   <thead><tr>
   <th>Id</th>
   <th>TITLE</th>
   <th>Completed</th>   
   <th>Edit</th>
   <th>Delete</th>
    </tr></thead>
    <tbody>
   {
    arr.map((gyan,deep)=>{
        return <tr key={deep}>            
            <td>{gyan.id}</td>
            <td>{gyan.title}</td>
            <td>{JSON.stringify(gyan.completed)}</td>
            <td><Link to={`/edit/${gyan.id}`}>edit</Link></td>
        </tr>
    })
   }
   </tbody>
   <tfoot></tfoot>
   </table>
   </>
  )
}
export default Todo