import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import App from './App';
import { AuthContextProvider } from './store/auth-context';
import { NavigationContextProvider } from './store/navigation-context';

ReactDOM.render(
    <AuthContextProvider>
        <NavigationContextProvider>
            <App />
        </NavigationContextProvider>
    </AuthContextProvider>,
    document.getElementById('root'));