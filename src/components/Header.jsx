import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="flex justify-between items-center bg-slate-600 p-4">
            <div className="flex items-center gap-3 w-1/3">
                <h1 className="text-3xl font-bold">CD<span className="text-red-600 text-3xl">.</span></h1>
                <input type="text" placeholder="Search..." className="grow py-1 px-2 outline-none rounded-sm" />
            </div>

            <div className="flex items-center gap-4">
                {/* Preventing server request by using "Link" to match path/route to "Route" path, to display component */}
                <Link to="/" className="opacity-70 hover:opacity-100">Home</Link>
                <Link to="/create" className="py-2 px-4 border border-black rounded-md">New Post</Link>
            </div>
        </div>
    );
}
 
export default Navbar;