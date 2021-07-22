import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h1 className="text-3xl text-center">Sorry! Page Not Found</h1>
            <div className="text-center my-4">
                <Link to="/" className="border-b-2 hover:border-red-300">Go to HomePage</Link>
            </div>
        </div>
    );
}
 
export default NotFound;