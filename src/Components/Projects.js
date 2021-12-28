import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
       <div>
           <h1 style={{color:"white"}}> Porjects</h1>
           
               <div class="card">
                   <img style={{ width:"440px"}}
                    src="./image/image02.jpg" alt=""  />
                     <div class="container">
                    <h4><b>Health Care</b></h4> 
                    <p>This projects is about health care 
                        Which user login by email and doctor see services   </p> 
                 </div>
                 <div style={{display:"flex"}}>
                <p style={{marginLeft:"90px"}} ><a  href="https://health-care-d0445.web.app"><i class="fas fa-globe">Live site</i></a></p>
                <p style={{marginLeft:"90px"}} ><a  href="https://github.com/Subrata34/health-care-"><i class="fab fa-github">Github Link</i></a></p> 
                 </div>
                 

              </div>
       </div>
    )
}

export default Projects
