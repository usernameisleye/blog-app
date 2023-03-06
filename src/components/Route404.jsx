import { Link } from "react-router-dom";

const Route404 = ({ location }) => {
    return ( 
        <div className="flex sm:flex-row flex-col justify-center items-center h-screen">
            <img src="./ROBOT-removebg-preview.png" alt="" />

            <div className="flex flex-col items-center gap-6 text-center p-8">
                <h1 className="text-4xl font-bold text-red-600">Error 404, Page Not Found</h1>
                <p className="text-xl">Sorry, the route <span className="font-bold text-red-600 mx-2">{ location.pathname }</span> does not exists</p>
                <Link to="/" className="hover:text-violet-800">Back To Homepage{`>>>`}</Link>
            </div>
        </div>
     );
}
 
export default Route404;