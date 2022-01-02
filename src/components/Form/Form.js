import React, { useState, useContext } from 'react';
import axios from 'axios';

import style from './Form.module.css';

import AuthContext from './../../store/auth-context';
import NavigationContext from './../../store/navigation-context';


const Form = (props) => {
    const ctx = useContext(AuthContext);
    const nctx = useContext(NavigationContext);
    const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
    const [signupFormData, setSignupFormData] = useState({ name: '', email: '', password: '' });


    const formDataHandler = (event) => {
        if (nctx.isLoginClicked) {
            setLoginFormData((prevData) => {
                return {
                    ...prevData,
                    [event.target.name]: event.target.value
                };
            })
        }


        if (nctx.isSignupCLicked) {
            setSignupFormData((prevData) => {
                return {
                    ...prevData,
                    [event.target.name]: event.target.value
                }
            })
        }

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (nctx.isSignupCLicked) {
            try {
                const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}user/signup`, signupFormData);
                nctx.removeForm();
                const { name, _id } = data.data.data.user;
                // console.log(data.data.data.user);
                ctx.isLoggedIn(true, data.data.data.token, name, _id);

            } catch (err) {
                console.log(err);
            }
        }
        if (nctx.isLoginClicked) {
            try {
                const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}user/login`, loginFormData);
                // console.log(data.data.data.token);
                nctx.removeForm();
                const { name, _id } = data.data.data.user;
                ctx.isLoggedIn(true, data.data.data.token, name, _id);
            } catch (err) {
                console.log(err);
            }
        }

    }

    let title = "SIGNUP"
    if (nctx.isLoginClicked) {
        title = "LOGIN";
    }

    return (<>
        <form action="" className={style.form} onSubmit={handleSubmit} onClick={(event) => { event.stopPropagation(); }}>
            <h3 className={style.title}>{title}</h3>
            <hr />
            {nctx.isSignupCLicked && <div className={style["input-container"]}>
                <label htmlFor="name">Name</label>
                <input id="name" onChange={formDataHandler} className={style["form-control"]} type="text" name="name" required />
            </div>}
            <br />

            <div className={style["input-container"]}>
                <label htmlFor="email">Email</label>
                <input id="email" onChange={formDataHandler} className={style["form-control"]} type="email" name="email" required />
            </div>
            <br />

            <div className={style["input-container"]}>
                <label htmlFor="password">Password</label>
                <input id="password" onChange={formDataHandler} className={style["form-control"]} type="password" name="password" required />
            </div>
            <div className={style.switch} onClick={() => { nctx.isLoginClicked ? nctx.onSignupClicked() : nctx.onLoginClicked() }}>
                Switch to {title === 'SIGNUP' ? 'LOGIN' : 'SIGNUP'}
            </div>
            <button className={style["button"]}>Submit</button>
        </form>
    </>);
}

export default Form;