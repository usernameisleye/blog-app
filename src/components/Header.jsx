import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Code Daily</h1>

            <div className="links">
                {/* Preventing server request by using "Link" to match path/route to "Route" path, to display component */}
                <Link to="/">Home</Link>
                <Link to="/create">New Post</Link>
            </div>
        </div>
    );
}
 
export default Navbar;