import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Review from './components/Review-Rating/Review';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Backdrop from './components/Backdrop/Backdrop';

import Home from './pages/Home';
import Marvel from './pages/Marvel';
import DC from './pages/DC';


import NavigationContext from './store/navigation-context';



// const addClass = () => {
//     document.getElementsByTagName('body')[0].classList.add('overlay-added');
// }
// const removeClass = () => {
//     document.getElementsByTagName('body')[0].classList.remove('overlay-added');
// }

function App() {
    const ctx = useContext(NavigationContext);
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

        <Router>

            {(ctx.isLoginClicked || ctx.isSignupCLicked) &&
                <Backdrop ><Form /> </Backdrop>}
            <Header />

            <Routes>
                <Route path="/" element={<Home />} exact></Route>
                <Route path="/DC" element={<DC />} exact></Route>
                <Route path="/Marvel" element={<Marvel />} exact></Route>
                <Route path="/:id" element={<Review />} exact></Route>
            </Routes>
            <Footer />
        </Router>



    );
}

export default App;