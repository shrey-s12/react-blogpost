import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="site-title">
                <Link to="/">MIT BLOGPOSTS</Link>
            </div>
            <ul>
                <li><Link to="/blogs">All Blogs</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/createBlog" >AddBlog</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;