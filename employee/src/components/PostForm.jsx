import React, { useState } from "react";
import { Formik,Form } from "formik";
import FormController from "./FormController";
import * as Yup from "yup";
import axios from "axios";

const PostForm=()=>{
    // const [emp,setEmp]=useState({
    //     "mobileNumber":0,
    //     "fname":"",
    //     "lname":"",
    //     "email":"",
    //     "address":""
    // })
   const [obj,setObj]= useState("")
    const initialValues={
        "mobileNumber":0,
        "fname":"",
        "lname":"",
        "email":"",
        "address":""
    }
    const validationSchema=Yup.object({
       
        
        "fName":Yup.string().required("Required  !").min(3,"Minimum 3 Characters are allowed").max(10,"Maximum 10 Characters are Required !"),
        "lName":Yup.string().required("Required  !").min(3,"Minimum 3 Characters are allowed").max(10,"Maximum 10 Characters are Required !"),
        "email":Yup.string().required("Required  !").email("please Enter Valid Format"),
        "address":Yup.string().required("Required  !")
    })
    // const {mobileNumber,fName,lName,email,address}=emp
    // const onInputChange=(e)=>{
    //     setEmp({...emp,[e.target.name]:e.target.value})
    // }
    const onSubmit=  values=>{
        // e.preventDefault();
        console.log(values)
        // const res=  await axios.post("http://localhost:4420/save",values)
        // const {data}=res;
        // setObj(data);
    }

return(
    <>
    <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
                {
                    formik =>{
                        return(
                            <Form>
                                <FormController control="input"
                                                label="MobileNumber"
                                                name="mobileNumber"
                                                type="tel"
                                                                                              
                                                
                                                ></FormController>
                                <FormController control="input"
                                                label="FirstName"
                                                name="fName"
                                                type="text"
                                                
                                                
                                                ></FormController>
                                                <FormController control="input"
                                                label="LastName"
                                                name="lName"
                                                type="text"
                                                
                                                ></FormController>
                                                <FormController control="input"
                                                label="Email"
                                                name="email"
                                                type="email"
                                                
                                                ></FormController>
                                                <FormController control="textarea"
                                                label="Address"
                                                name="address" 
                                                
                                                 ></FormController>
                                             <button type="submit" disabled={!formik.isValid}>Save</button>

                                </Form>
                        )
                    }
                }
            </Formik>
            <h1>{obj}</h1>
            </>

)
}
export default PostForm;