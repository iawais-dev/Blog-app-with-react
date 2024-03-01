import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const [title,settitle] = useState('');
    const [author,setauthor]= useState('')
    const [body ,setbody]= useState('')
    const [ispending, setpending] = useState(false)
    const [error, seterror]= useState(false)
    
   const navigate = useNavigate()

    const submit = (e)=>{
e.preventDefault();
const blog = {title , author, body}

//adding new blog
setpending(true)
fetch('http://localhost:8000/blog' , {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(blog)
}
).then(()=>{
    setpending(false)
    navigate('/')
})

    }
    return (  
        <div className="create">
            <form onSubmit={submit}>
                <label>Blog Title:</label>
                <input type="text"
                required 
                value={title}
                onChange={(e)=>settitle(e.target.value) }
                />
                <label>Blog Body:</label>
                <textarea required
                value={body}
                onChange={(e)=>setbody(e.target.value)}
                > </textarea>
                <label>Blog Author:</label>
                <input type="text"
                required 
                value={author}
                onChange={(e)=>setauthor(e.target.value)}
                />
                {!ispending && <button>submit</button>}
                {ispending && <button>Loading...</button> }
            </form>
        </div>
    );
}
 
export default Create;