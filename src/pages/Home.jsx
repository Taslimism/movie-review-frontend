import React from 'react';

import Banner from './../components/Banner/Banner';
// import Header from './../components/Header/Header';
import MovieCard from './../components/Movie-Card/MovieCard';
// import Form from './../components/Form/Form';
// import Backdrop from './../components/Backdrop/Backdrop';

// import NavigationContext from '../store/Navigation-Context';

// const addClass = () => {
//     document.getElementsByTagName('body')[0].classList.add('overlay-added');
// }
// const removeClass = () => {
//     document.getElementsByTagName('body')[0].classList.remove('overlay-added');
// }

const Home = () => {
    // const [isLoginClicked, setIsLoginClicked] = useState(false);
    // const [isSignupCLicked, setIsSignupClicked] = useState(false);
    // const loginHandler = () => {
    //     addClass();
    //     setIsLoginClicked(!isLoginClicked);
    // }
    // const signupHandler = () => {
    //     addClass();
    //     setIsSignupClicked(!isSignupCLicked);
    // }
    // const removeFormHandler = () => {
    //     removeClass();
    //     setIsLoginClicked(false);
    //     setIsSignupClicked(false);
    // }

    return (
        // <NavigationContext.Provider value={{
        //     isLoginClicked: isLoginClicked,
        //     isSignupCLicked: isSignupCLicked,
        //     loginHandler: loginHandler,
        //     signupHandler: signupHandler,
        //     removeFormHandler: removeFormHandler
        // }}>
        // {(isLoginClicked || isSignupCLicked) &&
        //     <Backdrop removeForm={removeFormHandler}><Form removeForm={removeFormHandler} isLoginClicked={isLoginClicked} isSignupCLicked={isSignupCLicked} /> </Backdrop>}
        // <Header onLoginClicked={loginHandler} onSignupClicked={signupHandler} />
        <>
            <Banner />
            <MovieCard />
        </>
        // </NavigationContext.Provider>


    );
}

export default Home;