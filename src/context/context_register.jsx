import React     from "react"

export const RegistrationContext = React.createContext()


const initialState = {
    name : "",
    age : "",
    dateOfbirth : "",
    stateOfResisdence : "",
    address : "",
    pincode : ""
}

function reducer(state , action){
    switch (action.type){
        case "CHANGE_NAME":
            return {...state , name : action.payload};
        case "CHNAGE_AGE":   
            return {...state,  age : action.payload};
        case "CHANGE_DOB":
            return {...state , dateOfbirth : action.payload}
        case "CHANGE_RESISDENCE":
            return {...state , stateOfResisdence : action.payload}
        case "CHANGE_ADDRESS":
            return {...state , address : action.payload}
        case "CHANGE_PINCODE":
            return {...state , pincode : action.payload}
            default:
                throw new Error()
    }

}
 
export const RegistrationContextProvider = ({children}) => {
    const [state , dispatch] = React.useReducer(reducer,initialState);

    const handelSubmit = () => {
        fetch(`http://localhost:3001/data`, {
            method : "POST",
            body : JSON.stringify(state),
            headers : {
                "Content-Type" : "application/json"
            }
        }).then((res) => res.json())
        .catch((err) => 
            console.log(err)
        );
    };


    const {name,age,dateOfbirth,stateOfResisdence, address ,pincode} = state;
    return (

        <div>
        <RegistrationContext.Provider
            value={{
                name,
                age,
                dateOfbirth,
                stateOfResisdence,
                address,
                pincode,
                dispatch,
                handelSubmit,
            }}
        >
            {children}
        </RegistrationContext.Provider>
        </div>
    )
}