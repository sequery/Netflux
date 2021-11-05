import './login.scss'

function Login() {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix-logo" className="logo" />
                </div>
            </div>
            <div className="container">
                <form action="">
                    <h1>Log In</h1>
                    <input type="email" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Log In</button>
                    <span>New To Netflux. <b>Sing Up Now.</b></span>
                </form>
            </div>
        </div>
    )
}

export default Login
