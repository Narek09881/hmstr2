import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './assets/styles/App.css';
import HomeIcon from './assets/img/icons/Home.png';
import CardsIcon from './assets/img/icons/Cards.png';
import EarnIcon from './assets/img/icons/Earn.png';
import FriendsIcon from './assets/img/icons/Friends.png';
import HomePage from './pages/Home';
import CardsPage from './pages/Cards';
import './assets/styles/font/font.css';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import { incrementBalance, incrementEnergy } from './store/slices/Slice';

function App() {
    return (
        <Router>
            <Main />
        </Router>
    );
}

function Main() {
    const dispatch = useDispatch();
    const [autoFarmActive, setAutoFarmActive] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoFarmActive) {
                dispatch(incrementEnergy());
                dispatch(incrementBalance());
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [dispatch, autoFarmActive]);

    const toggleAutoFarm = (active) => {
        setAutoFarmActive(active);
    };

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage toggleAutoFarm={toggleAutoFarm} />} />
                <Route path="/cards" element={<CardsPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <footer>
            <div className={`select ${location.pathname === '/' ? 'selected' : ''}`} onClick={() => navigate('/')}>
                <img src={HomeIcon} alt="Home" />
                <p>Home</p>
            </div>
            <div className={`select ${location.pathname === '/cards' ? 'selected' : ''}`} onClick={() => navigate('/cards')}>
                <img src={CardsIcon} alt="Cards" />
                <p>Cards</p>
            </div>
            <div className="select">
                <img src={EarnIcon} alt="Earn" />
                <p>Earn</p>
            </div>
            <div className="select">
                <img src={FriendsIcon} alt="Friends" />
                <p>Friends</p>
            </div>
        </footer>
    );
}

export default function WrappedApp() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
