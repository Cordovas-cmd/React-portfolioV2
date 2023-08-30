import React from 'react'
// import Fade from 'react-reveal/Fade';
import "./SkillsStyles.css"
import { DiVisualstudio, DiCssTricks, DiCss3, DiReact, DiJavascript, DiNodejs, DiGithubBadge, DiHtml5, DiDatabase, DiBootstrap, DiUnitySmall, DiMysql, DiMongodb } from "react-icons/di";


function Skills() {
    return (
        <section className="skills" id="skills">

        <h2 className="portfolio" id="portfolio" style={{ fontSize: "25px" }}>Skills and Technologies</h2>

        {/* <Fade left> */}
            <div className="row">

                <div id="Skills" className="skill-card col-2 " >
                    <div className="card-body">
                        <h5 id="Tech" className="card-title">React<DiReact /> </h5>
                    </div>
                </div>



                <div id="Skills" className="skill-card  col-2"  >
                    <div className="card-body">
                        <h5 id="Tech" className="card-title">Github<DiGithubBadge /></h5>
                    </div>
                </div>




                <div id="Skills" className="skill-card  col-2" >
                    <div className="card-body">
                        <h5 id="Tech" className="card-title">JavaScript<DiJavascript /></h5>
                    </div>
                </div>


                <div id="Skills" className="skill-card  col-2">
                    <div className="card-body">
                        <h5 id="Tech" className="card-title">CSS<DiCss3 /></h5>
                    </div>
                </div>




                <div id="Skills" className="skill-card  col-2">
                    <div className="card-body">
                        <h5 id="Tech" className="card-title">HTML<DiHtml5 /></h5>
                    </div>
                </div>

                <div id="Skills" className="skill-card  col-2">
                    <div className="card-body">
                        <h5 id="Tech" className="card-title">Bootstrap<DiBootstrap /></h5>
                    </div>
                </div>
                <div id="Skills" className="skill-card  col-2">
                    <div className="card-body">
                        <h5 id="Tech" className="card-title">MongoDB<DiMongodb /></h5>
                    </div>
                </div>
                <div id="Skills" className="skill-card  col-2">
                    <div className="card-body">
                        <h5 id="Tech" className="card-title">Node.js<DiNodejs /></h5>
                    </div>
                </div>
                <div id="Skills" className="skill-card  col-2">
                    <div className="card-body">
                        <h5 id="Tech" className="card-title">Visual Studio<DiVisualstudio /></h5>
                    </div>
                </div>
            </div>

        {/* </Fade> */}
    </section>
    )
}

export default Skills;