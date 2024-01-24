import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="d-flex items-center justify-between flex-direction-column">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/" className="text-decoration-none">Back to the homepage...</Link>
        </div>
    );
}
 
export default NotFound;