import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import GlobalStyles from './styles/global';
import Routes from './routes';
import Header from './components/Header/index';
import store from './store/index';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
                <GlobalStyles />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
