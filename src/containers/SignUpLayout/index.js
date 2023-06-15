import React from "react";
import { Box}  from "@mui/material"
import { Link } from "react-router-dom"
import LockIcon from '@mui/icons-material/Lock';
// import { PIC } from "../../constants/image";
import "./Signup.css"

 function SignUpLayout(){
   
    // class PaymentForm extends React.Component {
    //     post = (path, params) => {
    //       var form = document.createElement("form");
    //       form.setAttribute("method", "POST");
    //       form.setAttribute("action", path);
      
    //       for (var key in params) {
    //         var hiddenField = document.createElement("input");
    //         hiddenField.setAttribute("type", "hidden");
    //         hiddenField.setAttribute("name", key);
    //         hiddenField.setAttribute("value", params[key]);
    //         form.appendChild(hiddenField);
    //       }
      
    //       document.body.appendChild(form);
    //       form.submit();
    //     };
      
    //     handleClick = () => {
    //       var path = "https://uat.esewa.com.np/epay/main";
    //       var params = {
    //         amt: 1000,
    //         psc: 0,
    //         pdc: 0,
    //         txAmt: 0,
    //         tAmt: 1000,
    //         pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
    //         scd: "EPAYTEST",
    //         su: "http://merchant.com.np/page/esewa_payment_success",
    //         fu: "http://merchant.com.np/page/esewa_payment_failed"
    //       };
      
    //       this.post(path, params);
    //     };
      
    //     render(){
    //         return (
                
                    
                        
    //                 <Box  display={"flex"} flexDirection={"column"} alignItems={"center"} >
    //                <div className="container">
    //                     <LockIcon/>
    //                         <div className="header">
    //                             <h1>Sign Up</h1>
    //                         </div>
    //                         <div className="flname">
    //                             <input className="name" type="text" placeholder="First Name" ></input>
    //                             <input className="name" type="text" placeholder="Last Name" ></input>
    //                         </div>
    //                         <div className="email">
    //                             <input className="ename" type="text" placeholder="Email Address" ></input>
    //                         </div>
    //                         <div className="password">
    //                         <input className="pname" type="password" placeholder="Password" ></input>
    //                         </div>
    //                         <div className="radio">
    //                         <input className="rname" type="checkbox">
    //                         </input>
    //                         <label className="lable">
    //                         I want to receive inspiration, marketing  <br>
    //                         </br>
    //                        promotions and updates via email.
    //                          </label>
    //                         </div>
    //                         <div className="btn">
                        
                                
                               
    //                         <button className="signupbtn" onClick={this.handleClick}>Sign Up</button>
    //                         </div>
    //                         <div>
    //                             <Link to="/signin" >
    //                             Already have an account? Sign in
            
    //                              </Link>
    //                          </div>  
    //                      </div>
                       
                   
    //                 </Box>
            
                     
                  
                    
                  
                        
    //                 )
    //     }
         
          
    //     }
      
      
    
    return( 
        <>
        <div className="bg">
            
        <Box  display={"flex"} flexDirection={"column"} alignItems={"center"} >
       <div className="container">
            <LockIcon/>
                <div className="header">
                    <h1>Sign Up</h1>
                </div>
                <div className="flname">
                    <input className="name" type="text" placeholder="First Name" ></input>
                    <input className="name" type="text" placeholder="Last Name" ></input>
                </div>
                <div className="email">
                    <input className="ename" type="text" placeholder="Email Address" ></input>
                </div>
                <div className="password">
                <input className="pname" type="password" placeholder="Password" ></input>
                </div>
                <div className="radio">
                <input className="rname" type="checkbox">
                </input>
                <label className="lable">
                I want to receive inspiration, marketing  <br>
                </br>
               promotions and updates via email.
                 </label>
                </div>
                <div className="btn">
                   <Link to="/payment">
                   <button className="signupbtn">Sign Up</button>
                   </Link>
                
                </div>
                <div>
                    <Link to="/signin" >
                    Already have an account? Sign in

                    </Link>
                </div>  
            </div>
           
       
       </Box>

        </div>
      
        
      
            
        </>
    )
}
export default SignUpLayout