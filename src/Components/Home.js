
import React from 'react'
import { HashLink } from 'react-router-hash-link';
import Typewriter from 'typewriter-effect';

import './Home.css';
const Home = () => {

    return (
        <div>
            <div style={{display:"flex"}} class="bg-style">
            <div className="header-style">
                <h1 style={{color:"white"}}>SM</h1>

            </div>
            <div className="header-menu">
                <ul>
                <li>Home</li>
                    <li>About </li>
                    <li>Blog</li>
                    <li>Project</li>
                    <li>Contact</li>
                    
                       <li><a href="https://drive.google.com/file/d/18bbwqOIbSSkqOmBroyEx01deUZ9_uwa2/view?usp=sharing">
                        <button  style={{color:"black",backgroundColor:"green",borderRadius:"15px"}}>Resume</button></a>
                        </li>
            </ul>
            </div>
        </div>
        <div style={{display:"flex"}} class="bg-style">
           <div>
               <h1 class="name-style">This is  Subrata Modak </h1>
               <div class="dynamic">
              <h1>I am a <span style={{color:"orange"}} class="auto-input"> <Typewriter
               
               options={{
                   strings:[
                       "Web developer",
                       "MERN Stack Developer",
                       "React js Developer",
                       "Font End Developer",
                   ],
                   autoStart:true,
                   loop:true,
                   deleteSpeed:120,
               }}
               
               />
              </span></h1>
               </div>
               <div>
              <a style={{textAlign:"center",marginLeft:"-150px"}} href="https://drive.google.com/file/d/18bbwqOIbSSkqOmBroyEx01deUZ9_uwa2/view?usp=sharing"> 
              <button style={{textAlign:"center"}} style={{borderRadius:"15px",backgroundColor:"green"}}> Download Resume</button></a>
              </div>
           </div>
           <div>
               <h1></h1>
               <img style={{width:"400px",clipPath:"circle()"}} src="./image/image01.jpg"  alt="" />
           </div>
        </div>
        
         
        </div>
    )
}

export default Home
