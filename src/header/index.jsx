import React from "react";
import './stylehead.scss'
import { Link } from "react-router-dom";

const HeaderS = () => {
    return(
        <>
        <div className="header">
            <div><img src="./site content/icoBnack.png"></img></div>
            <div><Link to = {'/'}><img src="./site content/iconHome.png"></img></Link></div>
            <div>название</div>
            <div><img src="./site content/iconFor.png"></img></div>
        </div>
        </>
    )
}
export default HeaderS