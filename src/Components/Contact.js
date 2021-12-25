import React from 'react'

const Contact = () => {
    return (
        <div style={{display:"flex"}}>
            <div>
             <h1> contact Me </h1>
            </div>
        <div class="container" style={{backgroundColor:"gray ",color:"black"}}>
            <h1>Contact</h1>
             <form action="">
                 <div className="form-group">
                     <label for="firstName" style ={{margin:"20px"}}>First Name:</label>
                     <input type="text" name="firstName" id="firstName" />
                 </div>
                 <div className="form-group">
                     <label for="lastName" style ={{margin:"20px"}} >Last Name :</label>
                     <input type="text" name="lastName" id="firstName" />
                 </div>
                 <div className="form-group">
                     <label for="email" style ={{margin:"20px"}}>Email Address :</label>
                     <input style={{marginRight:"10px"}} type="email" name="email" id="email" />
                 </div>
                 <div className="form-group">
                 <label for="massage" style ={{margin:"15px"}}>Massage :</label>
                    
                     <textarea name="massage" id="massage" cols="30" rows="5">
                     </textarea>
                 </div>
                 <button type="submit" style ={{margin:"20px",paddingRight:"40px",borderRadius:"15px",
                  backgroundColor:"green",paddingLeft:"40px"}}>Submit</button>
                 
                </form>            
        </div>
        </div>
    )
}

export default Contact
