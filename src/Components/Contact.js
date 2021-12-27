import React from 'react'
import './Contract.css'

const Contact = () => {
   
    return (
        <div>
            <h1>Contact Me</h1>
        <div style={{display:"flex"}}>
            <div style={{width:"300px",marginLeft:"120px",marginTop:"20px"}}>
                 <h2 >Contact Information</h2>
                 <div>
                     <h3><i class="fas fa-user" style={{marginLeft:"20px"}}><br /></i>Name</h3>
                     <h4>Subrata Modak</h4>

                 </div>
                 <div>
                     <h3><i class="fas fa-map-marker-alt" style={{marginLeft:"20px"}}></i>Address</h3>
                     <h4>Dhaka,Bangladesh</h4>

                 </div>
                 <div>
                       <h3><i class="fas fa-envelope-square" style={{marginLeft:"20px"}} ></i>Email Address</h3>
                       <h4>subrata2202@gmail.com </h4>
                 </div>
            </div>
        <div class="container" style={{backgroundColor:"gray ",
        color:"black",width:"400px",marginRight:"5px"}}>
            <h1>Information Me</h1>
             <form action="">
                 <div className="form-group">
                     <label for="firstName" style={{marginRight:"105px"}}>First Name:</label>
                     <input type="text" name="firstName" id="firstName" />
                 </div>
                 <div className="form-group">
                     <label for="lastName" style ={{margin:"20px",marginRight:"105px"}} >Last Name :</label>
                     <input type="text" name="lastName" id="firstName" />
                 </div>
                 <div className="form-group">
                     <label for="email" style ={{margin:"20px",marginRight:"105px"}}>Email Address :</label>
                     <input style={{marginRight:"10px"}} type="email" name="email" id="email" />
                 </div>
                 <div className="form-group">
                 <label for="massage" style ={{margin:"15px",marginRight:"150px"}}>Massage :</label>
                    
                     <textarea name="massage" id="massage" cols="25" rows="5">
                     </textarea>
                 </div>
                 <button type="submit" style ={{margin:"20px",paddingRight:"40px",borderRadius:"15px",
                  backgroundColor:"green",paddingLeft:"40px"}}>Submit</button>
                 
                </form>            
        </div>
        </div>
        </div>
    )
}

export default Contact
