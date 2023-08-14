import React from 'react'
import "./regi.css"
import { useNavigate } from 'react-router-dom'
const Registration = () => {
const myNavigation=useNavigate()

  return (
    <div >
<form className='form'action="">
<h1>Registration</h1>
<label>Name</label>
<input type="text" placeholder="name"></input><br></br>
<br></br>
<label>Address</label>
<input type='text' placeholder="Address"></input>
    <br></br>
<br></br>
<label>Ph Number</label>
<input type="Number" placeholder="Phone number"></input><br></br>
<br></br>
<label>Place</label>
<input type="text" placeholder="place"></input><br></br>
<br></br>




<label>Password</label>
<input type="password" placeholder='password'/>
<br></br><br></br>


<label>Retype Password</label>
<input type="password" placeholder='password'/>
<br></br><br></br>
<button onClick={()=>{myNavigation('login')}}>submit</button>
</form>



    </div>
  )
}

export default Registration