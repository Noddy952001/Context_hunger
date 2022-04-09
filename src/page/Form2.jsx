import React from "react";
import {RegistrationContext} from "../context/context_register"
import {useNavigate } from "react-router-dom";
import {Navigate} from "react-router-dom"
export const Form2 = () => {

    const nagivate = useNavigate()
    const {
        name ,
        age ,
        dateOfbirth ,
        stateOfResisdence ,
        address ,
        pincode ,
        dispatch,
        handelSubmit

    } = React.useContext(RegistrationContext)

    if(!name || !age || !dateOfbirth){
        return <Navigate to="/register/one"/>;
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="resisdance"
                value={stateOfResisdence}
                onChange={(e) => 
                    dispatch({
                        type :"CHANGE_RESISDENCE",
                        payload : e.target.value
                    })
                }
            />
            <br />

            <input 
                placeholder="Enter Address" 
                type="text"
                value={address}
                onChange={(e) => {
                    dispatch({type : "CHANGE_ADDRESS" , payload: e.target.value})
                }}
            /><br/>

            <input 
                type="Number"
                placeholder="pincode"
                value={pincode}
                onChange={(e) => 
                    dispatch({
                        type :"CHANGE_PINCODE",
                        payload : e.target.value
                    })
                }
            />
            <br />

            <button

                disabled={
                    !stateOfResisdence ||
                    !address ||
                    !pincode ||
                    !name ||
                    !age  || 
                    !dateOfbirth

                }

                onClick={ handelSubmit }

                // onClick={(handelSubmit) => {
                //     nagivate("/user")
                // }}
               
            >
                SUBMIT

            </button>
        </div>
    )
}