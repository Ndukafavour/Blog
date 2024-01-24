import { useNavigate } from "react-router"
import "./Home.css"
const Home = () => {

    const nav = useNavigate();
    return(
        <div className="home">
            <div className="homewrap">
                <div className="wrap">
                    <img src="src/assets/EchoSphere.png" alt="" />
                </div>
                 <div className="witee">
                     <h1 className="echo">Welcome to Echosphere</h1>
                     <h4 className="echop">Create an account to unlock these benefits</h4>
                 </div>
                 <button  onClick={() => nav("/signup")}className="echbtn">Signup</button>

            </div>
            

        </div>
    )
}

export default Home