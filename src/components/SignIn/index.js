import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import  "./signin.css"
import LockIcon from '@mui/icons-material/Lock';


function Signin() { 
    return (
        <>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            
            <div className="container">
            <LockIcon/>
                    <div className="header">
                        <h1>Sign In</h1> 
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
                Remember Me.
                 </label>
                </div>
                <div className="btn">
                <button className="signupbtn">Sign in</button>
                </div>
                <div>
                    <Link to="/signup" >
                    Don't have an account? Sign Up
                    </Link>
                </div>  
            </div>
        </Box>
        </>
    )
}
export default Signin