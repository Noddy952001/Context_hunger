import React from "react";
import {RegistrationContext} from "../context/context_register"
import {useNavigate } from "react-router-dom";

export const Form_1 = () => {

    const { name , age , dateOfBirth , dispatch } = React.useContext(RegistrationContext)

    const navigate = useNavigate();

    return(
        <div>
            <input 
                placeholder="Enter name" 
                type="text"
                value={name}
                onChange={(e) => {
                    dispatch({type : "CHANGE_NAME" , payload: e.target.value})
                }}
            /><br/>

            <input 
                placeholder="Enter age" 
                type="Number"
                value={age}
                onChange={(e) => {
                    dispatch({type : "CHNAGE_AGE" , payload: e.target.value})
                }}
            /><br/>

            <input 
                placeholder="Enter name" 
                type="date"
                value={dateOfBirth}
                onChange={(e) => {
                    dispatch({type : "CHANGE_DOB" , payload: e.target.value})
                }}
            /><br/>

            <button
                disabled={!name && !age && !dateOfBirth}
                    onClick={() => {
                    navigate("/register/two")
                }}
            >
                Next

            </button>
                
           
        </div>
    )

}
