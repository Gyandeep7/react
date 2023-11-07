import axios from 'axios'

import React, { useState } from 'react'

 const Add = () => {
    const [user,setUser]=useState({
        "id":0,
        "title":"",
        "completed":false
    })
    const addData= async ()=>{
        await axios.post("https://jsonplaceholder.typicode.com/users/1/todos",user)
    }
  return (
   <>
    <form onSubmit={(e)=>onSubmit(e)}>
        <div className="md-1">
            <label htmlFor="name">id</label>
            <br />
            <input type={"number"} 
                   className="form-control"
                   placeholder="Enter Id"
                   name="id"
                   value={id}
                   onChange={(e)=>onInputChange(e)}
                /> 
        </div>
        <div className="md-1">
            <label htmlFor="nickName">Title</label><br />
            <input type={"text"} 
                   className="form-control"
                   placeholder="Enter Your Title"
                   name="title"
                   value={title}
                   onChange={(e)=>onInputChange(e)}
                />
        </div>
        <div className="md-1">
            <label htmlFor="mobilenumber">M</label><br />
            <input type={"tel"} 
                   className="form-control"
                   placeholder="Enter Your Name"
                   name="mobilenumber"
                   value={mobilenumber}
                   onChange={(e)=>onInputChange(e)}
                />
        </div>
        <div className="md-1">
            <label htmlFor="email">Email</label><br />
            <input type={"email"} 
                   className="form-control"
                   placeholder="Enter Your Email"
                   name="emailId"
                   value={emailId}
                   onChange={(e)=>onInputChange(e)}
                />
        </div>
        <button onSubmit={(e)=>savedata(e)} className="btn btn-warning">Update</button>
    </form>
   </>
  )
}
export default Add;