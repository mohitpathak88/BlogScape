import { Link } from "react-router-dom";
//For 404:

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2> Sorry </h2>
            <p>Page not found</p>
            <Link to="/">Back to Home...</Link>
        </div>
     );
}
 
export default NotFound;    