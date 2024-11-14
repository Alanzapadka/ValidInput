import React, { useState, useEffect, useReducer } from "react";
import './Validate.css';
const ValidatedInput = ({
}) => {
const [Valid, setValid] = useState(true)

const[userError, setUserError] = useState(null)


return(
    <form >
        <div>
            <label>Username:</label>
            <input type="text" name="username" placeholder="Username" autoComplete="off"  />
     
        </div>
        <div>
            <label>Email:</label>
            <input type="text" name="email" placeholder="Email" autoComplete="off"  >
    
            </input>
            </div>
            <div>
            <label>Password:</label>
            <input type="text" name="password" placeholder="password" autoComplete="off" >
 
            </input>
            </div>
            <button type="submit">Submit</button>
    </form>
)}

export default ValidatedInput