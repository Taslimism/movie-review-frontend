
import React, { useState } from 'react';

const addClass = () => {
    document.getElementsByTagName('body')[0].classList.add('overlay-added');
}
const removeClass = () => {
    document.getElementsByTagName('body')[0].classList.remove('overlay-added');
}

const NavigationContext = React.createContext({
    isLoginClicked: false,
    isSignupCLicked: false,
    onLoginClicked: () => { },
    onSignupClicked: () => { },
    removeForm: () => { }

})

export const NavigationContextProvider = (props) => {
    const [isLoginClicked, setIsLoginClicked] = useState(false);
    const [isSignupCLicked, setIsSignupClicked] = useState(false);

    const loginHandler = () => {
        addClass();
        setIsLoginClicked(!isLoginClicked);
        setIsSignupClicked(false);
    }
    const signupHandler = () => {
        addClass();
        setIsSignupClicked(!isSignupCLicked);
        setIsLoginClicked(false);
    }
    const removeFormHandler = () => {
        removeClass();
        setIsLoginClicked(false);
        setIsSignupClicked(false);
    }

    return <NavigationContext.Provider value={{
        isLoginClicked: isLoginClicked,
        isSignupCLicked: isSignupCLicked,
        onLoginClicked: loginHandler,
        onSignupClicked: signupHandler,
        removeForm: removeFormHandler
    }}>
        {props.children}
    </NavigationContext.Provider>
}

export default NavigationContext;