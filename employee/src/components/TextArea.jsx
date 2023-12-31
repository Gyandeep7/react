import React from "react";
import TextError from "./TextError";
import {Field,ErrorMessage} from "formik"

const TextArea=(props)=>{
    const {label,name,...rest}=props;
    return(
       <React.Fragment>
         <div className="form-control">
            <label htmlFor="{name}">{label}</label>
            <Field as="textarea" name={name} id={name}{...rest}></Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>
       </React.Fragment>
    )
}
export default TextArea;