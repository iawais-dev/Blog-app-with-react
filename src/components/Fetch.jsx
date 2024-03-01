import { useState,useEffect } from "react"

const Fetch = (url) => {
    const [blog ,setblog]= useState(null)
const[ispending ,setpending]= useState(true)
const [error, seterror]=useState(null)
   
        useEffect(()=>{
            setTimeout(() => {
             fetch(url)
             .then((hmm)=>{
                 if(!hmm.ok){
                     throw Error('Sorry coudnt fetch the data from the server')
                 }
                 else{
                     return hmm.json()
                 }
             })
             .then(data =>{
                 setblog(data)
                 setpending(false)
             })
             .catch((w)=>{
               seterror(w.message)
               setpending(false)
             })
            }, 1000);
          },[url])
     return {blog,ispending,error}    
}
 
export default Fetch;