

import React, { useState } from 'react'

const FormExample = () => {
    const [userName, setUserName] = useState('')
    const [newUserDetails, setNewUserDetails] = useState('')
    const getUserName=(event)=>{
        setUserName(event.target.value)
    }
    const userDetails=(e)=>{
        e.preventDefault();
        setNewUserDetails(userName)
    }
  return (
    <selection className='form'>
        <h2>Hello, {newUserDetails} </h2>
        <div>
            <input type="text" placeholder='Enter your name' onChange={getUserName}/><br />
            <button className='submit-btn'onClick={userDetails}>Submit</button>
        </div>
    </selection>
  )
}

export default FormExample