import React from 'react';
import coverImage from '../../assets/cover/yes.jpg';
// import ParticleField from "../Particles";



function Header(props) {

    return (
        <>
        {/* <ParticleField /> */}
        <header className= "header-wrapper flex-row space-between px-1">
            <div className= "main-info">
    <h1>web development and website promotions</h1>
    
    <a href="#contact" className="btn-main-offer">Contact Me</a>
            </div>
            <img src={coverImage} alt="wooden background"></img>
            {props.children}
        </header>
        </>
        
    )
    //   <header className="flex-row space-between px-1">
    //     <h1>Lernantino</h1>
    //     <img src={coverImage} alt="wooden background"></img>
    //     {props.children}
    //   </header>
    // );
  }
  
  export default Header;