import { Link } from 'react-router-dom';

const Navbar = () => {

    // Function for "toggleMenu" parameters functionality
    function toogleMenu(e, className){
        if(e.classList.contains(className)){
            e.classList.remove(className);
        }else{
            e.classList.add(className);
        }
    }

    // Onclick funtion to show menu
    function showMenu(){
        const menu = document.querySelector(".menu");
        toogleMenu(menu, "scale-0");
    }


    return ( 
        <div className="flex justify-between items-center bg-slate-600 p-4">
            <div className="flex items-center gap-3 w-1/3">
                <h1 className="text-3xl font-bold">CD<span className="text-red-600 text-3xl">.</span></h1>
                <input type="text"
                 placeholder="Search..."
                 className="input grow py-1 px-2 z-10 outline-none rounded-sm" 
                   />
            </div>

            <img src="./bars-solid.svg" className="w-6 sm:hidden relative" alt="" onClick={showMenu}/>
            <div className="menu flex sm:flex-row flex-col z-10 items-center gap-4 sm:bg-inherit bg-slate-600 sm:static absolute sm:top-0 top-16 left-0 sm:w-fit w-full sm:py-0 py-8 sm:scale-100 scale-0">
                {/* Preventing server request by using "Link" to match path/route to "Route" path, to display component */}
                <Link to="/" className="text-gray-100 sm:opacity-70 hover:opacity-100" onClick={showMenu}>Home</Link>
                <div className="sm:hidden block w-11/12 bg-slate-200 border-b border-opacity-30"></div>
                <Link to="/create" className="py-2 px-4 sm:border border-gray-100 text-gray-100 rounded-md" onClick={showMenu}>New Post</Link>
            </div>
        </div>
    );
}
 
export default Navbar;