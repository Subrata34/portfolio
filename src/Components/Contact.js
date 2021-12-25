import React from 'react'

const Contact = () => {
    return (
        <div class="container">
            <h1>Contact Me</h1>
             <form action="">
                 <div className="form-group">
                     <label for="firstName">First Name</label>
                     <input type="text" name="firstName" id="firstName" />
                 </div>
                 <div className="form-group">
                     <label for="lastName">Last Name</label>
                     <input type="text" name="lastName" id="firstName" />
                 </div>
                 <div className="form-group">
                     <label for="email">Email Address</label>
                     <input type="email" name="email" id="email" />
                 </div>
                 <div className="form-group">
                 <label for="massage">Massage</label>
                     <textarea name="massage" id="massage" cols="30" rows="10">
                     </textarea>
                 </div>
                 <button type="submit">Submit</button>
                 
                </form>            
        </div>
    )
}

export default Contact
