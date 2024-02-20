import React,{useState} from 'react'
import './Register.css';
const Register= () => {
    const [username, setUsername] = useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:"",
    })
    const handleChange = (e)=>{
        setUsername((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
  return (
    <div className="register-container">
    <div className="register-wrapper">
        <h1 className='title'>CREATE AN ACCOUNT</h1>
        <form className='register-form '>
            <input type="text" className="input" onChange={handleChange} name='username' placeholder='Username' />
            <input type="email" className="input" onChange={handleChange} name='email' placeholder='Email' />
            <input type="password" className="input" onChange={handleChange} name='password' placeholder='Password' />
            <input type="password" className="input" onChange={handleChange} name='confirmpassword' placeholder='Confirm Password' />
            <span className="agreement"> By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button className="button" >CREATE USER</button>
        </form>
    </div>
</div>
  )
}
export default Register