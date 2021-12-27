import React from 'react'
import "./Skills.css"

const Skills = () => {
    return (
        <div >
                 <h1 style={{color:"black"}} >My Skills</h1>
                 <div style={{display:"flex",margin:"15px"}}>
                     <div class="column left">
                        <h3 style={{textAlign:"center",fontWeight:"bold",color:"black",fontSize:"25px"}}>My creative skills and Experence </h3>
                          <p style={{color:"black",fontSize:"20px",color:"white"}}>Experienced Technical Analyst with a demonstrated history of working 
                          in the computer software industry. Skilled in React.js, JavaScript
                               (ES6), HTML5, CSS3, Bootstrap,Tailwind,Metarial UI,Node MongoDB,Express.js

                          </p>
                     </div>
                     <div class="column right">
                         <div className="bars">
                             <div className="box">
                                 <span style={{marginLeft:"28px",color:"white"}}>HTML</span>
                                 <span class="text"style={{color:"white"}}>90%</span>
                                 <div className="line html"></div>
                             </div>
                         </div>
                         <div className="bars">
                             <div className="box">
                                 <span style={{marginLeft:"40px",color:"white"}}>CSS</span>
                                 <span class="text" style={{color:"white"}}>60%</span>
                                 <div className="line css"></div>
                             </div>
                         </div>
                         <div className="bars">
                             <div className="box">
                                 <span style={{color:"white"}}>JavaScript</span>
                                 <span class="text" style={{color:"white"}}>60%</span>
                                 <div className="line js"></div>
                             </div>
                         </div>
                         <div className="bars">
                             <div className="box">
                                 <span style={{color:"white"}}>MongoDB</span>
                                 <span class="text"style={{color:"white"}} >40%</span>
                                 <div className="line mongoDB"></div>
                             </div>
                         

                     </div>
                 </div>
                
            </div>
        </div>
    )
}

export default Skills
