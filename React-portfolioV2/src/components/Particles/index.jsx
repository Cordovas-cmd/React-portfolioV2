import React from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';


function ParticleField() {

  
    return (
        <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 35,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 10,
                color: "rgb(118, 41, 190)"
              }
            }
          }
        }} />
    );
  }
  
  export default ParticleField;
  