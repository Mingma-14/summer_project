import { BoyRounded, Height } from "@mui/icons-material"
import "./navbar.css"
import { Link } from "react-router-dom"
import { PIC } from "../../constants/image"

function NavBar(){
  return(
    
      <div className="nav-container">
        <div className="logo">
            <img src={PIC.leo} style={{height:"50px"}} ></img>
        </div>
        <div className="nav-links">
          <Link to={"/"}>
            <div className="nav-link">Home</div>
          </Link>
          <Link to={"/"}>
            <div className="nav-link">About Us</div>
          </Link>
          <Link to={"/members"}>
            <div className="nav-link">Member</div>
          </Link>
          <Link to={"/"}>
            <div className="nav-link">Gallery</div>
          </Link>
          <Link to={"/signup"}>
            <div className="nav-link">Sign Up</div>
          </Link>
        </div>

      </div>
    

  )

}

export default NavBar