import { useRef } from 'react'
import { useState } from 'react'
import './register.scss'

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix-logo" className="logo" />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited Movies, Series and Anime.</h1>
                <h2>Watch Anywhere, with Compatable FrontEnd Written In React.</h2>
                <p>
                    Tired of Work or Boring WeekEnd, create your very own account and start binging.
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="Email Address" ref={emailRef}/>
                        <button className="registerButton" onClick={handleStart}>
                            Start Watching
                        </button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="password" placeholder="Password" ref={passwordRef}/>
                        <button className="registerButton" onClick={handleFinish}>
                            Start Binging
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Register
