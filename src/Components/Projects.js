import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
       <div>
           <h1 style={{color:"white"}}> Porjects</h1>
           <div style={{display:"flex"}}>
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
               <div class="card">
                   <img style={{ width:"440px"}}
                    src="./image/image03.jpg" alt=""  />
                     <div class="container">
                    <h4><b>Health Care</b></h4> 
                    <p>This projects is about health care 
                        Which user login by email and doctor see services   </p> 
                 </div>
                 <div style={{display:"flex"}}>
                  <p style={{marginLeft:"30px"}} ><a  href="https://car-shop-96d46.web.app/"><i class="fas fa-globe">Live site</i></a></p>
                 <p style={{marginLeft:"60px"}} ><a  href="https://github.com/Subrata34/houda-car"><i class="fab fa-github">Github Link</i></a></p> 
                 <p style={{marginLeft:"60px"}} ><a  href="https://github.com/programming-hero-web-course-4/niche-website-server-side-Subrata34"><i class="fab fa-github">Server site  Link</i></a></p> 
                 </div>
                 </div>

              </div>
       </div>
    )
}

export default Projects
