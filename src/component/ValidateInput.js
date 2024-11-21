import React, { useState, useEffect, useRef } from "react";
import './Validate.css';

const ValidatedInput = ({
}) => {
    const firstrender = useRef(true)
const [Valid, setValid] = useState(true)

const[userError, setUserError] = useState(null)
const  [Name, setName] = useState(" ")
useEffect(() => {
    if(firstrender.current) {
        firstrender.current = false
        return

    }
   
    setValid(formValidation( ))


}, [Name,  ])
const formValidation = () => {
    
if( Name  === " ") {
    setUserError('name cant be blank!')
    return false
} else{
    setUserError(null)
    return true
 }

}
const handleSave = (e) =>{
e.preventDefault()
if(Valid){
    const data = {Name}
    const jsonData = JSON.stringify(data)
    console.log(jsonData)
}

}
return(
    <form onSubmit={handleSave} >
       <input
       type="text"
       name="Name"
       value={Name}
       onChange={e => setName(e.target.value)}
       />
       { userError && <p className="Error">{userError}</p> }
       <button type="submit" disabled={Valid}>Submit</button>
    </form>
)}

export default ValidatedInput