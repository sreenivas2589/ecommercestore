// JavaScript source code

import notfound from "../assets/error.jpg";
import { NavLink } from 'react-router-dom'

// Errorpage component to display a custom error page when a route is not found
function Errorpage() {

    return (
        <div className="notfound">
            <div>
                <img src={notfound}></img>
            </div>
            
            <div>
                <NavLink to="/products"><button>Go Back to Products</button></NavLink>
                <NavLink to="/"><button>Go Back to Home</button></NavLink>
            </div>
        </div>

    )
}

export default Errorpage