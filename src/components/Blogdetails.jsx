import {useNavigate, useParams } from "react-router-dom";
import Fetch from "./Fetch";
// import { useNavigate } from "react-router-dom";


const Bloglist = () => {
    const{ id }= useParams()
    const{blog,ispending,error} = Fetch('http://localhost:8000/blog/' + id)

const navi = useNavigate()

    const del = ()=>{
        fetch('http://localhost:8000/blog/' + blog.id , {
            method: 'DELETE'
        }).then(()=>{
         navi('/')
        })
    }

    return (
        <div className="details" id="blog-detail">
            {ispending && <div>Loading...</div> }
            {error && <div>{error}</div> }
            {
                blog && <article>
                   <h2 id="detail-title">{blog.title}
                    </h2>  
                    <p id="detail-author"> {blog.author}
                    </p>
                    <p id="detail-body">{blog.body}</p>
                    <button onClick={del} id="delbtn">Delete</button>
                </article>
            }

        </div>
    );
}
 
export default Bloglist;