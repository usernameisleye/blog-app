import { Link } from "react-router-dom";

const Route404 = ({ location }) => {
    return ( 
        <div className="error">
            <h1>Error 404, Page Not Found</h1>
            <p>Error, the 'route' <span>{ location.pathname }</span> does not exists</p>
            <Link to="/">Go To Homepage✅</Link>
        </div>
     );
}
 
export default Route404;