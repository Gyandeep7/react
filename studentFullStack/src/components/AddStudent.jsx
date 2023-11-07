import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AddStudent = () => {
    const [msg,setMsg]=useState();
    const navigate=useNavigate()
    const [student,setStudent]=useState(
        {
            "sname":"",
            "s1":0,
            "s2":0,
            "s3":0
        }
    )

    const {sname,s1,s2,s3}=student;
    const onInputChange=(g)=>{
        setStudent({...student,[g.target.name]:g.target.value})
    }
    const onSubmit=async(g)=>{
        g.preventDefault();
        const res= await axios.post(`http://localhost:7177/save`, student)
        setMsg(res.data)
    }
  return (
    <>
    <form onSubmit={(g)=>onSubmit(g)}>
        <div>
            <label htmlFor='sname'>SName</label>
            <input type={"text"}
                    className="form-control"
                    placeholder='Enter Student Name'
                    name='sname'
                    value={sname}
                    onChange={(g)=>onInputChange(g)}>
            </input>
        </div>
        <div>
        
            <label htmlFor='s1'>Subject 1</label>
            <input type= {"number"}
                    className='form-control'
                    placeholder='Enter Subject 1 Marks'
                    name='s1'
                    value={s1}
                    onChange={(g)=>onInputChange(g)}>
            </input>
        </div>
        <div>
            <label htmlFor='s2'>Subject 2</label>
            <input type={"number"}
                    className='form-control'
                    placeholder='Enter Subject 2 Marks'
                    name='s2'
                    value={s2}
                    onChange={(g)=>onInputChange(g)}>
            </input>
        </div>
        <div>
            <label htmlFor='s3'>Subject 3</label>
            <input type={"number"}
                    className='form-control'
                    placeholder='Enter Subject 3 Marks'
                    name='s3'
                    value={s3}
                    onChange={(g)=>onInputChange(g)}>
            </input>
        </div>
        <button type='submit'>Save</button>
    </form>
<h1>{msg}</h1>
    </>
  )
}
export default AddStudent;
