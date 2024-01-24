import "./Readmore.css"
import { View } from "../View"
import { Link } from "react-router-dom"
// import Post from "../Post/Post";

const Readmore = ()=>{

   
        // Example posts
        const view = [
          { _Id: 'view-1', title: 'Accessercise app makes it easier for people with disabilities to exercise"', content: 'Accessercise, which developed a fitness app for people who want to exercise despite their disabilities, was one of the Startup Battlefield 200 finalists at TechCrunch Disrupt 2023.', image: "https://techcrunch.com/wp-content/uploads/2023/10/Accessercise-Startup-Battlefield-TechCrunch-Disrupt-2023-Eric-Slomonson-The-Photo-Group.jpg?resize=680,453"},
        //   { _Id: 'view-2', title: 'Beams helps product teams shine a light on the work that matters most', content: 'More post content...', image: "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1029961918.jpg?resize=680,454"},
        //   { _Id: 'view-3', title: 'After Netflix says no, other app makers debate a Vision Pro launch', content: "YouTube is the most popular video-sharing platform in the world, so it’ll be disappointing to customers when they’re forced to go to Safari to get their YouTube fix. It also means they can’t access YouTube’s offline downloads feature, which defeats the purpose of using the headset on planes. Notably, YouTube provides an app on rival headset Meta Quest.", image: ""}
        ];
      
    return(
        <div className="readmore">
            <div className="readwrap">
                {/* <img src="" alt="" /> */}
                {
                    view?.map((view)=>(
                        
                        // <Post key={post.postId} {...post} />

                        <div className="readii">
                        <div className="readiicard">
                            <div className="readiimg">
                                <img src={view.image} alt="" />
                            </div>
                            <div className="readtitle">
                                 <h3 style={{fontFamily: "monospace", color: "black", fontWeight: "12px", paddingLeft: "10px"}}className="retil">{view.text}</h3>
                            </div>
                            <div className="readcontent">
                                <h4 style={{fontStyle: "italic", fontSize: "12px"}}className="ridcont">{view.content}</h4>
                            </div>
    
                        </div>
    
    
                    </div>
    
                    ))
                }

                <button className="back" >
                    <Link style={{color: "white", textDecoration: "none"}} to="/land">back to home</Link>
                    </button>
             
            </div>

        </div>
    )
}

export default Readmore