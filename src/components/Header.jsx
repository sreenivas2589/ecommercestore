// JavaScript source code
import { NavLink, Outlet } from 'react-router-dom'
import Image from "../assets/shopping-cart.png"
//import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Menu from "../assets/menu.png"

function Header() {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    // Custom hook to get window dimensions and update on resize
    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }


    const { __, width } = useWindowDimensions();

    const [classname, setclassname] = useState("menu");

    //header component to display navigation links and shopping cart icon
    // It also handles responsive design for the menu

    return (
        <>
            <div className="header">
                <div>
                    <h1>E Commerce</h1>
                </div>
                <div className={width < 769 ? classname : "menu"}>
                    <NavLink to="/"><button>Home</button></NavLink>
                    <NavLink to="/products"><button>Products</button></NavLink>
                    <NavLink to="/cart"><button>Cart</button></NavLink> 
                </div>
                <div>
                    <NavLink to="/cart"><img src={Image}></img></NavLink>
                </div>
                <div className="menuicon" onClick={() => { classname == "menu" ? setclassname("menuclicked") : setclassname("menu") }}>
                    <img src={Menu}></img>
                </div>

            </div>
            <Outlet />
        
        </>
    )

}

export default Header