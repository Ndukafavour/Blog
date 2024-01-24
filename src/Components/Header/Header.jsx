import { Link } from "react-router-dom";
import "./Header.css"
import { FaRegCircleUser } from "react-icons/fa6";
const Header = () =>{

    // const Nav = useNavigate();

    return(
       <div className="header">
        <div className="headwrap">
            <div className="left">
                <div className="dribble">
                    <div className="half">
                       <img src="src/assets/EchoSphere.png" alt="" />
                    </div>
                </div>
                <div className="middle">
                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>About us</li>
                        <li>News</li>
                        <li>Contact</li>
                    </ul>

                </div>

            </div>
            <div className="right">
                <div className="rightwrap">
                    <div className="log">
                         <div className="logwrap">
                           <Link style={{color: "black", textDecoration: "none"}} to="/login"><h4 >Log in</h4></Link> 
                            <button className="btn">
                                <Link style={{color: "white", textDecoration: "none"}}to="/signup">  <FaRegCircleUser/> Sign up</Link>
                          
                            </button>

                         </div>



                    </div>

                </div>

            </div>

        </div>
       
       </div>
       
    )
}

export default Header