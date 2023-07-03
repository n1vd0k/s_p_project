import React from "react";
import './stylehead.scss'
import { Link } from "react-router-dom";

function MAMBA() {
    return (
        <>
            <div className="header">
                <div><Link to={'/T666'}><img src="./site content/icoBnack.png" alt=""></img></Link></div>
                <div><Link to={'/'}><img src="./site content/iconHome.png" alt=""></img></Link></div>
                <div><p>Mamba Mentality</p></div>
                <div><Link to={'/Careere'}><img src="./site content/iconFor.png" alt=""></img></Link></div>
            </div>
        </>
    );
}
export default MAMBA