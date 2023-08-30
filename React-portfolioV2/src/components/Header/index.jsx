import React from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';

function Header(props) {

    return (
        
        <header className= "header-wrapper">
            <div className= "main-info">
    <h1>web development and website promotions</h1>
    <Typed
    className= "typed-text"
    strings={["Web design", "Web Development", "Fullstack", "I'm A Web Wizard!!"]}
    typeSpeed={40}
    backSpeed={40}
    loop
    />
    <a href="#contact" className="btn-main-offer">Contact Me</a>
            </div>
            <img src={coverImage} alt="wooden background"></img>
            {props.children}
        </header>
        
    )
    //   <header className="flex-row space-between px-1">
    //     <h1>Lernantino</h1>
    //     <img src={coverImage} alt="wooden background"></img>
    //     {props.children}
    //   </header>
    // );
  }
  
  export default Header;