import React,{useState} from 'react'
import './Login.css';

const Login = () =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div className="login-container">
            <div className="login-wrapper">
                <h1 className='title'>SIGN IN</h1>
                <form className='login-form'>
                    <input type="text" className="input" placeholder='Username' onChange={(e)=>setUsername(e.target.value)} />
                    <input type="password" className="input" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
                    <button className="button" >LOGIN</button>
                    <a href='/forget' className="link">Don't you remember the password?</a>
                    <a href='/register' className="link">Create the new account</a>
                </form>
            </div>
        </div>
  )
}

export default Login