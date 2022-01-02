import React, { useState, useEffect } from 'react';



const AuthContext = React.createContext({
    loggedIn: false,
    name: '',
    isLoggedIn: () => { }
})

export const AuthContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [id, setId] = useState(null);
    const [token, setToken] = useState(null);

    const isLoggedIn = (isLogin, token, name, id) => {
        // console.log(loggedIn);
        localStorage.setItem('movie', token);
        localStorage.setItem('name', name);
        localStorage.setItem('id', id);
        setToken(token);
        setLoggedIn(isLogin);
        setName(name);
        setId(id);
    }
    const logOut = () => {
        localStorage.setItem('movie', null);
        localStorage.setItem('name', '');
        localStorage.setItem('id', null);
        setLoggedIn(false);
        setToken(null);
        setName('');
        setId(null);
    }

    useEffect(() => {
        // console.log(localStorage.getItem('movie'));
        if (localStorage.getItem('movie') !== 'null') {
            // console.log(localStorage.getItem('movie'));
            isLoggedIn(true, localStorage.getItem('movie'), localStorage.getItem('name'), localStorage.getItem('id'));
        }
    }, [])


    return (
        <AuthContext.Provider value={{ id: id, name: name, loggedIn: loggedIn, logOut: logOut, isLoggedIn: isLoggedIn, token: token }} >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;