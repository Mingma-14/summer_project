import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./footer.css"
import { Link } from "react-router-dom"

function Footer(){
    return(
        <>
        <footer className='footer'>
            <div className='footer-container'>
            <div className='icons'>
        <Link to={"https://www.facebook.com/leobudhigandaki"} >
        <FacebookIcon/>
        </Link>
        <Link to={""} >
        <TwitterIcon/>
        </Link>
        <Link to={"https://www.instagram.com/leoclubofbudhigandaki/"} > 
        <InstagramIcon/>
        </Link>
        <Link to={"https://api.whatsapp.com/send?phone=%2B9779861506970&data=ARDU9gJj4aycK8ESokRdn5txLUbXC8klTmCloS2U-wOuRhHtt80yfL1JlMI4X-UKKOwiU-iHXfg0-fE1z5wRkwk3SDOcoGYLd1E-2NsmQyJnFbHjldOlNQFwidvo7lfgsOBy3wYu44mYIhLEhg08mBT82A&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR2-0AUh7X7hHF31cfWniraH_su0stDnjihaqaYuZPoVemoA17_D_sdmKv0"} > 
        <WhatsAppIcon/>
        </Link>
       
       
        </div>
        
        <label className='lable'>  Copyright © Your Website 2023.</label>
            </div>
       
        </footer>
        </>
    )
       
   
}

export default Footer