import React from 'react'
import { useState } from 'react'
import "./login.css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <div className='login'>
            <form className='loginForm'>
                <input type="text" placeholder="email" className="loginInput" />
                <input type="password" placeholder="password" className="loginInput" />
                <button className='loginButton'>Login</button>
            </form>
        </div>
    )
}

export default Login