import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="nav">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='create'>Add New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;