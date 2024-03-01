import { useState,useEffect } from "react";
import Bloglist from "./Bloglist";
import Fetch from "./Fetch";
const Content = () => {
const{blog,ispending,error} = Fetch('http://localhost:8000/blog')


 
 
    return ( 
     
        <div className="content">
            <h1>All Blogs!</h1>
                {error && <div>{error}</div> }
            {ispending && <div>Loading...</div> }
        {blog && <Bloglist  blog = {blog} />}
        </div>
     );
}
 
export default Content;