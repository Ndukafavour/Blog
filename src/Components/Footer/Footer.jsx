import "./Footer.css"
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImPinterest } from "react-icons/im";
const Footer = () => {
    return(
        <div className="footer">
            <div className="footwrap">
                <div className="ft-top">
                    <div className="timg">
                        <img src="src/assets/EchoSphere.png" alt="" />
                    </div>
                    <div className="ft-side">
                        <ul className="ftlist">
                               <li>For designers</li>
                               <li>Hire talent</li>
                               <li>Inspiration</li>
                               <li>Advertising</li>
                               <li>Blog</li>
                               <li>About</li> 
                               <li>Careers</li>
                               <li>Support</li>
                        </ul>
                    </div>
                    <div className="fticons">
                       <BiLogoFacebookSquare />
                       <FaTwitter />
                       <FaInstagram />
                       <ImPinterest />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer