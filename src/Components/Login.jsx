import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const {setUser} = useContext(UserContext)

  const submitHandler = (e) =>{
    e.preventDefault()
    setUser({userName,password})
  }

  return (
    <div>
      <input type="text" 
             placeholder='Username'
             value={userName}
             onChange={(e) => setUserName(e.target.value)}      
      />
      {" "}
      <input type="password"
             placeholder='password'
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
      />

      <button onClick={submitHandler}>Login</button>
    </div>
  )
}

export default Login
