import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
       <div>
           <h1 style={{color:"white"}}> Porjects</h1>
           
               <div class="card">
                   <img style={{clipPath:"circle()", width:"400px",marginLeft:"-75px"}}
                    src="./image/image02.jpg" alt=""  />
                     <div class="container">
                    <h4><b>Health Care</b></h4> 
                    <p>This projects is about health care 
                        Which user login by email and doctor see services   </p> 
  </div>

               </div>
       </div>
    )
}

export default Projects
