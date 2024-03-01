import { Link } from "react-router-dom";
const Bloglist = ({blog}) => {
    return ( 
     blog.map((blog)=> (
        <div className="blog-preview" key={blog.id}>
           <Link to={`/details/${blog.id}`} id="fp">
             <h2 id= 'blogtitle'>{blog.title}</h2>
            <p  id="aut" >Written by {blog.author}</p>
           </Link>
          
        </div>
     ))
     );
}
 
export default Bloglist;