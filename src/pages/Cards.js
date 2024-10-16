import React from "react";
import '../assets/styles/Cards.css';
import Coin from "../assets/img/coin.png";
import balanceBG from "../assets/img/balanceBG.png";
import Card1BG from "../assets/img/card1/BG.png";
import Card1Fruit from "../assets/img/card1/fruit.png";
import { useSelector } from 'react-redux';
import {formatNumber} from "../assets/format";
import {perTap} from "../store/slices/Slice";

function Cards() {
    const balance = useSelector((state) => state.hamster.balance);
    return (
        <div className="cards">
            <div className="topStatesCard">
                <div className={"balanceDiv"}>
                    <p>Balance</p>
                    <div className="balanceSmall">
                        <img src={Coin} alt={"Coin"} className={"coin"}/>
                        <p>{balance}</p>
                        <img src={balanceBG} alt={"BalanceSmallBG"} className={"balanceBGSmall"}/>
                    </div>
                </div>
                <div className={"perDiv"}>
                <p>Per hour</p>
                    <div className={"perMain"}>
                        <img src={Coin} alt={"Coin"}/>
                        <p>{formatNumber(perTap * 3600)}</p>
                    </div>
                </div>
            </div>

            <div className={"buttons"}>
                <button className={"selectBut"}>Equipment</button>
                <button>Supplies</button>
                <button>Infrastructure</button>
                <button>Infrastructure</button>
            </div>
            <div className={"CardsDiv"}>
                <div className="card">
                    <div className="imgs">
                        <img src={Card1BG} alt={"bg"}/>
                        <img src={Card1Fruit} alt={"fruit"}/>

                    </div>
                    <div className="Info">
                        <p>Level 2</p>
                        <div className={"centerInfo"}>
                            <div className="toAddCard">
                                <img src={Coin} alt={"coin"}/>
                                <p>+120/h</p>
                            </div>
                            <p className="cardTitle">Magic <br/> Strawberry</p>
                        </div>
                        <div className="cardPrice">
                            <img src={Coin} alt={"coin"}/>
                            <p>320</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imgs">
                        <img src={Card1BG} alt={"bg"}/>
                        <img src={Card1Fruit} alt={"fruit"}/>

                    </div>
                    <div className="Info">
                        <p>Level 2</p>
                        <div className={"centerInfo"}>
                            <div className="toAddCard">
                                <img src={Coin} alt={"coin"}/>
                                <p>+120/h</p>
                            </div>
                            <p className="cardTitle">Magic <br/> Strawberry</p>
                        </div>
                        <div className="cardPrice">
                            <img src={Coin} alt={"coin"}/>
                            <p>320</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imgs">
                        <img src={Card1BG} alt={"bg"}/>
                        <img src={Card1Fruit} alt={"fruit"}/>

                    </div>
                    <div className="Info">
                        <p>Level 2</p>
                        <div className={"centerInfo"}>
                            <div className="toAddCard">
                                <img src={Coin} alt={"coin"}/>
                                <p>+120/h</p>
                            </div>
                            <p className="cardTitle">Magic <br/> Strawberry</p>
                        </div>
                        <div className="cardPrice">
                            <img src={Coin} alt={"coin"}/>
                            <p>320</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imgs">
                        <img src={Card1BG} alt={"bg"}/>
                        <img src={Card1Fruit} alt={"fruit"}/>

                    </div>
                    <div className="Info">
                        <p>Level 2</p>
                        <div className={"centerInfo"}>
                            <div className="toAddCard">
                                <img src={Coin} alt={"coin"}/>
                                <p>+120/h</p>
                            </div>
                            <p className="cardTitle">Magic <br/> Strawberry</p>
                        </div>
                        <div className="cardPrice">
                            <img src={Coin} alt={"coin"}/>
                            <p>320</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imgs">
                        <img src={Card1BG} alt={"bg"}/>
                        <img src={Card1Fruit} alt={"fruit"}/>

                    </div>
                    <div className="Info">
                        <p>Level 2</p>
                        <div className={"centerInfo"}>
                            <div className="toAddCard">
                                <img src={Coin} alt={"coin"}/>
                                <p>+120/h</p>
                            </div>
                            <p className="cardTitle">Magic <br/> Strawberry</p>
                        </div>
                        <div className="cardPrice">
                            <img src={Coin} alt={"coin"}/>
                            <p>320</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imgs">
                        <img src={Card1BG} alt={"bg"}/>
                        <img src={Card1Fruit} alt={"fruit"}/>

                    </div>
                    <div className="Info">
                        <p>Level 2</p>
                        <div className={"centerInfo"}>
                            <div className="toAddCard">
                                <img src={Coin} alt={"coin"}/>
                                <p>+120/h</p>
                            </div>
                            <p className="cardTitle">Magic <br/> Strawberry</p>
                        </div>
                        <div className="cardPrice">
                            <img src={Coin} alt={"coin"}/>
                            <p>320</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;