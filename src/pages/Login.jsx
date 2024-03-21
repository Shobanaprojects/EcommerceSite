import { Fragment, useState } from "react";
import cartimg from "../assets/images/basket-cart-icon.png";
import { useNavigate } from "react-router-dom";
import CustomButton from "./Custombutton";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const onSignIn = () => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: username,
                password: password,

            })
        })
            .then(res => res.json())
            .then((result) => {
                if (result.token != null) {
                    localStorage.setItem('userToken', result.token)
                    navigate("/home")
                } else {
                    alert("Invalid username and password")
                }
            });
    }
    return (
        <Fragment>
             <section className="login-section">
                <div className="login-titleimg text-center">
                    <img src={cartimg} alt="No image found" />
                </div>
                <div>
                    <h3 className="text-center fw-bold mt-5">Welcome to shop</h3>
                    <div className="form-floating mt-5 mb-3">
                        <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="username" />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="mt-3">
                        <a href="">Forgot password?</a>
                    </div>
                    <div className="d-grid mt-3">
                        <CustomButton btnStyle="btn btnbgcolor" type="submit" title={"Shop"} btnonClick={onSignIn} />
                    </div>
                    <div className="text-center mt-3">
                        Don't have an account? <a href="">Sign up</a>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
export default Login;