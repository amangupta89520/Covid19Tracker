import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiSun } from "react-icons/fi";

const Navbar = () => {

    const location = useLocation();

    const [showDrawer, setShowDrawer] = useState(false);

    const showDrawerFunc = () => {
        setShowDrawer(!showDrawer);
    }

    return (
        <div className="p-2  bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <div className="flex mb-2">
                <button className="mr-4 justify-items-center focus:outline-none pb-2" onClick={showDrawerFunc}><FiMenu /></button>
                <h1 className="text-red-400 dark:text-yellow-300 text-3xl mx-auto mb-4 w-full">Covid 19 Tracker</h1>
                <button id="switchTheme" className="outline-none h-10 w-10 flex justify-center items-center focus:outline-none text-red-300 dark:text-yellow-500"><FiSun /></button>
            </div>

            {showDrawer? <div className="m-2">
                <ul className="text-red-400 dark:text-yellow-300 text-lg mx-auto mb-4 w-full">
                {location.pathname === '/stateWise'?  <li className="rounded-md hover:bg-red-50 dark:hover:bg-gray-700"><Link to="/">Global Cases</Link></li> : <li className="rounded-md hover:bg-red-50 dark:hover:bg-gray-700"><Link to="/stateWise">Cases Near You</Link></li>}
                <li className="rounded-md hover:bg-red-50 my-2 dark:hover:bg-gray-700"><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">Safety Guidelines</a></li>
                {location.pathname === '/about'? <li className="rounded-md hover:bg-red-50 dark:hover:bg-gray-700"><Link to="/">Global Cases</Link></li> : <li className="rounded-md hover:bg-red-50 dark:hover:bg-gray-700"><Link to="/about">About us</Link></li>}
                </ul>
            </div> : <></>
            }

        </div>
    );
}
 
export default Navbar;