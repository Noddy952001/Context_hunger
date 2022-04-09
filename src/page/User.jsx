import React, { useState } from "react";
import axios from "axios"




export const User = () => {
    

    <h1>user page</h1>
    const [data , setData] = useState([])

    React.useEffect(() => {
        getdata()
    },[])

    const getdata = () => {
        axios.get("http://localhost:3001/data").then(function (res){
            setData(res.data)
        })
       
    }

    return(
        <div>
            <table className="table">
                   <thead>
                       <tr>
                           <th className="table">Name</th>
                           <th  className="table">Age</th>
                           <th  className="table">Date</th>
                           <th  className="table">State of address</th>
                           <th  className="table">Address</th>
                           <th  className="table">Pincode</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           data.map((el) => {

                            return (

                            
                                <tr>
                                    <td className="table" >{el.name}</td>
                                    <td className="table" >{el.age}</td>
                                    <td className="table" >{el.dateOfbirth}</td>
                                    <td className="table" >{el.stateOfResisdence}</td>
                                    <td className="table" >{el.address}</td>
                                    <td className="table" >{el.pincode}</td>
                                </tr>
                            )
                           })
                       }
                   </tbody>
            </table>
        </div>
    )
  
    

}
