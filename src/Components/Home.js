import React from 'react'
import './Home.css';
const Home = () => {
    return (
        <div style={{display:"flex"}} class="bg-style">
           <div>
               <h1 class="name-style">This is  Subrata Modak </h1>
               <div class="dynamic">
              <h1>I am a <span style={{color:"orange"}}> Web Developer</span></h1>
              
               </div>

              <a style={{textAlign:"center"}} href="https://drive.google.com/file/d/18bbwqOIbSSkqOmBroyEx01deUZ9_uwa2/view?usp=sharing"> 
              <button style={{textAlign:"center"}} style={{borderRadius:"15px",backgroundColor:"green"}}> Download Resume</button></a>

           </div>
           <div>
               <h1></h1>
               <img style={{width:"400px",clipPath:"circle()"}} src="./image/image01.jpg"  alt="" />
           </div>
        </div>
    )
}

export default Home
