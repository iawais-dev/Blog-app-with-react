import Navbar from "./components/navbar"
import Bloglist from "./components/Blogdetails"
import Content from "./components/content"
import Create from "./components/create"
import { BrowserRouter as Router , Route ,Routes } from "react-router-dom"
import { useEffect } from "react"
function App() {
  useEffect(()=>{
    document.title = 'Dojo Blog'
  },[])
 return(
  <Router>
     <div >
      
      <Navbar></Navbar>
    <Routes>
    
      <Route path="/" element={ <Content></Content>}></Route>
      <Route path="/create" element={< Create  />}></Route>
      <Route path="/details/:id" element={<Bloglist />}> </Route>
    </Routes>
   

  </div>
  </Router>
 
 )
}

export default App
