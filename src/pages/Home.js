import React from 'react';
import Panda from '../assets/img/panda.png';
import Coin from '../assets/img/coin.png';
import balanceBG from '../assets/img/balanceBG.png';
import smallFruit from '../assets/img/smallFruit.png';
import Space from '../assets/img/space.png';
import Clicker from '../assets/img/fruit.png';
import FruitBG from '../assets/img/fruitBG.png';
import '../assets/styles/Home.css';
import { useDispatch } from 'react-redux';
import { incrementBalance, decrementEnergy } from '../store/slices/Slice';
import { useSelector } from 'react-redux';
import { useState } from "react";
import { maxEnergy, perTap } from '../store/slices/Slice';
import { formatNumber } from '../assets/format';
const Home  = ({ toggleAutoFarm }) => {
    const dispatch = useDispatch();
    const [clickCount, setClickCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const balance = useSelector((state) => state.hamster.balance);
    const energy = useSelector((state) => state.hamster.energy);
    const handleClick = (event) => {
        dispatch(incrementBalance());
        toggleAutoFarm(false);
        setClickCount(prevCount => prevCount + 1);
        setIsVisible(true);
        setIsFadingOut(false);
        dispatch(decrementEnergy());
        clearTimeout(window.clickTimeout);
        window.clickTimeout = setTimeout(() => {
            setIsFadingOut(true);
            setClickCount(0);
            setTimeout(() => {
                setIsVisible(false);
            }, 500);
        }, 1000);

        setTimeout(() => {

            toggleAutoFarm(true);
        }, 1000);
    };

    return (
        <div className="Home">
            <div className="topStates">
                <div className="heroDiv">
                    <div className="heroInfo">
                        <p>Hero</p>
                        <p>95%</p>
                    </div>
                        <div className="heroMain">
                            <p>Panda</p>
                            <img src={Panda} alt="Panda"/>
                        </div>
                </div>
                <div className="perDivs">
                    <div className="perDiv">
                        <p>Per hour</p>
                        <div className="perMain">
                            <img src={Coin} alt="Coin" />
                            <p>{formatNumber(perTap * 3600)}</p>
                        </div>
                    </div>
                    <div className="perDiv">
                        <p>Per tap</p>
                        <div className="perMain">
                            <img src={Coin} alt="Coin" />
                            <p>{formatNumber(perTap)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="balance">
                <img src={balanceBG} alt="BalanceBG" className="balanceBG" />
                <img src={Coin} alt="Coin" />
                <p>{balance.toLocaleString('de-DE')}</p>
            </div>

            <div className="levelDiv">
                <div className="fruitDiv">
                    <div className="fruitInfo">
                        <p>Berry</p>
                        <p><span className={"purpleText"}>95%</span></p>
                    </div>
                    <div className="fruitMain">
                        <p>Grape</p>
                        <img src={smallFruit} alt="smallFruit" />
                    </div>
                    <div className="fruitInfo">
                        <p>0<span className={"purpleText"}>(5000)</span></p>
                        <p>5800</p>
                    </div>
                </div>
                <div className="boostDiv">
                    <p>Boost</p>
                    <div className="boostMain">
                        <img src={Space} alt="space" />
                    </div>
                    <p>Available now</p>
                </div>
            </div>
            <div className="Main">
                <img src={FruitBG} alt={"FruitBG"} id={"fruitBG"}/>
                <img src={Clicker} alt="clicker" onClick={handleClick}/>
                {isVisible && (
                    <div className={`click-container ${isFadingOut ? 'hidden' : ''}`}>
                        <p>+{clickCount}</p>
                    </div>
                )}
                <div className={"EnergyBar"}>
                    <p>Your Energy: {Math.round(energy / maxEnergy * 100)} %</p>
                    <div className={"Track"}>

                        <p>{energy}</p>
                        <div className={"Bar"} style={{width: `${Math.round(energy / maxEnergy * 100)}%`}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
