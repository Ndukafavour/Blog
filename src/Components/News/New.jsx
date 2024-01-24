import "./News.css"
import { Data } from "../Data"
// import { Link, redirect, useNavigate } from "react-router-dom"

import React from 'react';
import { useHistory } from "react-router-use-history";
// import { useHistory } from 'react-router-dom';





    
const News = ({ _id, image, title, content }) => {
    const history = useHistory()
  
    const redirectToNews = () => {
      // Redirect to the page with the post identifier
      history.push(`/read`);
    };

    // const nav = useNavigate()
    return(
        <div className="news">
            <div className="newswrap">
                {
                    Data?.map((e)=>(
                        <div className="firstnews">

        
                    <div className="card1">
                          <div className="cardimg">
                            <img src={e.image} alt=""/>
                              </div>
                            <div className="title">
                            {e.title}
                            </div>
                            <div className="content">
                             {e.content}

                            </div>

                            <button className="more"  onClick={redirectToNews}>read more</button>
                      </div>

                 </div>
           
                    ))
                }
            </div>
            <button className="rid">View all</button>

        </div>
    )
}

export default News 