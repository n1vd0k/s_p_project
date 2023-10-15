import React from "react";
import './styleHome.scss'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <><div className="Home">
              <span className='Home-span1'>I'm here. I'm not going anywhere. Regardless of the injury, unless it is completely debilitating, I will be the same player I have <br/>always been.</span>

        <img  src='./background1.jpg' alt=""></img>
        </div>
      
      <div className="Home">
        <h1 className="Home-h1">Careere</h1>
        <span className='Home-span2'>A loss is a loss. There are no different<br/> degrees of loss. Either you win the <br/>championship, or you're shit. For me it's <br/>very black and white.</span>

      <Link to ={'/Careere'}><img  src='./background2.jpg'alt=""></img></Link>
        </div>
      
      <div className="Home">
      <h1 className="Home-h2">Achivments</h1>
      <span className='Home-span3'>When you understand what failure is, determination pursues success.</span>

      <Link to ={'/Achivments'}><img  src='./background3.jpg'alt=""></img></Link>
      </div>
      
      <div className="Home">
      <h1 className="Home-h3">Trening programm 6/6/6</h1>
      <Link to ={'/T666'}><img  src='./background5.jpg'alt=""></img></Link>
      <span className='Home-span4'>I played with a broken arm, sprained ankle, broken shoulder, broken tooth, cut lip and<br/> a knee the size of a softball. I don't miss 15 games because of a toe injury, and<br/> everyone knows it wasn't that bad.</span>
      </div>
      
      <div className="Home">
      <h1 className="Home-h1">Mamaba mentality</h1>
      <Link to ={'/Mamba'}><img  src='./background4.jpg'alt=""></img></Link>
      <span className='Home-span5'>Buy now</span>
      </div></>
  );
}

export default HomePage;