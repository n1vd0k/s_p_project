import React from "react";
import "./styleM.scss"
import { Link } from "react-router-dom";
import MAMBA from "../../header/mamba";
const Mamba = () => {
    return(
        
        <div className="m-body">
            <MAMBA/>
            <div>
                <img className="m-img1" src="./site content/mm1.jpg"></img>

            </div>
            <div className="m-h1">
                <h1>The Mamba Mentality: How I Play</h1>
                <h2>
                By Bryant Kobe<br/><br/>
                Translator: P. I. Mikheev.<br/><br/>
                Publishing house: Bombora, 2021<br/><br/>
                Series: Gift editions. Sport<br/><br/>
                </h2>
                <button><Link className="link1" to={'https://www.amazon.com/Mamba-Mentality-How-Play/dp/0374201234'}>Buy now<br/> 10.79$</Link></button>
            </div>
            <div>
                <p className="m-txt">
                Summary of the book "Kobe Bryant. The Mamba Mentality. The philosophy of my game"<br/><br/>

The book introduces readers to the legendary philosophy of self-development and rivalry, which<br/> immortalized basketball superstar Kobe Bryant as one of the greatest in the history of the game.<br/>
Bryant describes in detail his understanding of sports and documents who he was inspired by and from <br/>whom he learned, how he played through pain and why he refused to accept defeats. He shares<br/> his attitude to constant learning and work on himself, getting better every day with his teammates. Page by<br/> page, game by game, Bryant takes apart specific opponents throughout his career - from Michael Jordan<br/> to LeBron James.<br/>
All of this is accompanied by stunning shots by Andrew D. Bernstein, the NBA Hall of Fame<br/> photographer who captured Kobe's first and last appearance as a "lake boy" and many other rare <br/>moments. The Mamba Mentality is a symbol of how a great athlete devoted his life to his vocation and<br/> main passion - basketball and the game.<br/>
                </p>
            </div>
        </div>
    );
}
export default Mamba;