import React from "react";
import { useNavigate } from "react-router-dom";

const NoMatch = ()=>{
    const navigate = useNavigate();
    return(
        <div className="lost">
            <h1>
              404- page not Found
            </h1>
            <div className="backButton" onClick={()=>{navigate('/')}}>
               help me to regain your direction
            </div>
        </div>
    )
}

export default NoMatch;