import React, { useContext } from 'react';

import Avatar from './../Avatar/Avatar'
import AuthContext from './../../store/auth-context';
import NavigationContext from './../../store/navigation-context';
import style from './Navigation.module.css'

const Navigation = (props) => {
    const ctx = useContext(AuthContext);
    const nctx = useContext(NavigationContext);

    return <div className={style.auth}>
        {!ctx.loggedIn && <button onClick={nctx.onLoginClicked} className={style.login}>Login</button>}
        {!ctx.loggedIn && <button onClick={nctx.onSignupClicked} className={style.signup}>Sign Up</button>}
        {ctx.loggedIn && <button onClick={ctx.logOut} className={style.signup}>Logout</button>}
        {ctx.loggedIn && <><Avatar className={style.profile} /> <h3 className={style.name}>{ctx.name}</h3></>}

    </div>
}

export default Navigation;