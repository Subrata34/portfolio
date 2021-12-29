import React from 'react'
import './Contract.css'

const Contact = () => {
   
    return (
        <div style={{color:"black"}}>
            <h1 style={{color:"white"}}>Contact Me</h1>
        <div style={{display:"flex"}}>
            <div style={{width:"300px",marginLeft:"120px",marginTop:"20px"}}>
                 <h2 style={{color:"white"}} >Contact Information</h2>
                 <div>
                     <h3><i class="fas fa-user" style={{marginLeft:"20px",color:"red"}}><br /></i>Name</h3>
                     <h4 style={{color:"white"}}>Subrata Modak</h4>

                 </div>
                 <div>
                     <h3><i class="fas fa-map-marker-alt" style={{marginLeft:"20px",color:"red"}}></i>Address</h3>
                     <h4 style={{color:"white"}}>Dhaka,Bangladesh</h4>

                 </div>
                 <div>
                       <h3><i class="fas fa-envelope-square" style={{marginLeft:"20px",color:"red"}} ></i>Email Address</h3>
                       <h4 style={{color:"white"}}>subrata2202@gmail.com </h4>
                 </div>
            </div>
            <div class="container" style={{
        color:"black",width:"400px"}}>
        <div >
            <h2 style={{color:"white"}}>Information Me</h2>
             <form style={{backgroundColor:"white"}} action="https://formsubmit.co/subratamodak3491@gmail.com " method="POST">
                 <div className="form-group">
                     <label for="firstName" style={{marginRight:"105px",borderRadius:"15px",color:"black"}}>First Name:</label>
                     <input style={{borderRadius:"5px"}} type="text" name="firstName" id="firstName" />
                 </div>
                 <div className="form-group">
                     <label for="lastName" style ={{margin:"20px",marginRight:"105px",color:"black"}} >Last Name :</label>
                     <input style={{borderRadius:"5px"}} type="text" name="lastName" id="firstName" />
                 </div>
                 <div className="form-group">
                     <label for="email" style ={{margin:"20px",marginRight:"105px",color:"black"}}>Email Address :</label>
                     <input style={{marginRight:"10px",borderRadius:"5px"}} type="email" name="email" id="email" />
                 </div>
                 <div className="form-group">
                 <label for="massage" style ={{margin:"15px",marginRight:"150px",color:"black"}}>Massage :</label>
                    
                     <textarea  style={{borderRadius:"10px"}} name="massage" id="massage" cols="25" rows="5">
                     </textarea>
                 </div>
                 <button type="submit" style ={{margin:"20px",paddingRight:"40px",borderRadius:"15px",
                  backgroundColor:"green",paddingLeft:"40px",marginTop:"-10px"}}>Submit</button>
                 
                </form>  
                </div>
                 <div id="status" class="error" style={{color:"white"}}>Success</div>         
        </div>
        
        </div>
        </div>
    )
}

export default Contact
