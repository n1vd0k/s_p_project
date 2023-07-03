import React from "react";
import './stylehead.scss'
import { Link } from "react-router-dom";

function CAREERE() {
    return (
        <>
            <div className="header">
                <div><Link to={'/Mamba'}><img src="./site content/icoBnack.png" alt=""></img></Link></div>
                <div><Link to={'/'}><img src="./site content/iconHome.png" alt=""></img></Link></div>
                <div><p>Careere</p></div>
                <div><Link to={'/Achivments'}><img src="./site content/iconFor.png" alt=""></img></Link></div>
            </div>
        </>
    );
}
export default CAREERE