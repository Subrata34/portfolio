

import React from 'react'
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses'


const Home = () => {
    return (
        <div style={{display:"flex"}}>
           <div>
               <h1>I am subrata modak </h1>
           </div>
           <div>
               <h1>this is porflolio</h1>
               <img style={{width:"400px",clipPath:"circle()"}} src="./image/image01.jpg"  alt="" />
           </div>
        </div>
    )
}

export default Home
