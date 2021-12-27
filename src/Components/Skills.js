import React from 'react'
import "./Skills.css"

const Skills = () => {
    return (
        <div>
            <div className="skils">
                <div className="max-width">
                 <h1 class="titles">My Skills</h1>
                 <div style={{display:"flex",margin:"15px"}}>
                     <div class="column left">
                        <h3 style={{textAlign:"center",fontWeight:"bold"}}>My creative skills and Experence </h3>
                          <p>Experienced Technical Analyst with a demonstrated history of working in the computer software industry. Skilled in React.js, JavaScript
                               (ES6), HTML5, CSS3, Bootstrap,Tailwind,Metarial UI,Node MongoDB,Express.js

                          </p>
                     </div>
                     <div class="column right">
                         <div className="bars">
                             <div className="box">
                                 <span style={{marginLeft:"28px"}}>HTML</span>
                                 <span class="text">90%</span>
                                 <div className="line html"></div>
                             </div>
                         </div>
                         <div className="bars">
                             <div className="box">
                                 <span style={{marginLeft:"40px"}}>CSS</span>
                                 <span class="text">60%</span>
                                 <div className="line css"></div>
                             </div>
                         </div>
                         <div className="bars">
                             <div className="box">
                                 <span>JavaScript</span>
                                 <span class="text">60%</span>
                                 <div className="line js"></div>
                             </div>
                         </div>
                         <div className="bars">
                             <div className="box">
                                 <span>MongoDB</span>
                                 <span class="text">40%</span>
                                 <div className="line mongoDB"></div>
                             </div>
                         </div>

                     </div>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
