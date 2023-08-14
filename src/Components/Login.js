import React from 'react'
import { useNavigate } from 'react-router-dom'
 const Login = () => {
    const myNavigation=useNavigate()
  return (
    <div>
        <form>
         <h1>Login</h1>
          <label >Name</label>
          <input type="text" /><br></br>
          <br></br>
          <label >Password</label>
          <input type="password" />
          <br></br>
          <br></br>
          <button onClick={()=>{myNavigation('/Home')}}> submit</button>
        </form>
    </div>
  )
}
export default Login