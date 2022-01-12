import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="title">Blog It</h1>
            <div className="navlinks">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;