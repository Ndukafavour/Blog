import "./Viewall.css"
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { GiShare } from "react-icons/gi";

const Viewall = ()=> {
    return(
        <div className="viw">
            <div className="viwwrap">
                <div className="viwcard">
                    <div className="viwimg">
                        <img src="" alt="" />
                    </div>
                    <div className="viwtitle">

                    </div>
                    <div className="viwcontent">

                    </div>
                    <div className="viwicons">
                        <CiHeart />
                        <FaRegComment />
                        <GiShare />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Viewall