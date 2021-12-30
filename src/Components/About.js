import React from 'react'
import Typewriter from 'typewriter-effect'

const About = () => {
    return (
        <div style={{color:"black"}}>
            <h1 style={{color:"white"}}>About Me</h1>
            <div>
                <div>
                    
                </div>
            <div>
            <h4 style={{fontSize:"35px",color:"#00CF5D"}}>I am  Subrata Modak and I am a <span style={{color:"orange"}}>
                <Typewriter
                    options={{
                        strings:[
                            "Font End Developer",
                            "Web Developer",
                            "React Js Developer"
                        ],
                        autoStart:true,
                        loop:true,
                        deleteSpeed:120,
                    }}
                />
                
                 </span>  </h4>
            <p style={{width:"700px",marginLeft:"260px",color:"white",fontSize:"25px" }}>I am an  enthustic person and who learn new tools enhance capbility .
               I am providing interactive web development and I am hard work and enthustic person secure applications in all verticals 
               using latest tools and platforms for designing and developing powerful user-friendly interfaces. 
            </p>

          </div>
          </div>
            
        </div>
    )
}

export default About
