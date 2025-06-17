// JavaScript source code
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addItemToCart } from "../redux/store.jsx"
import cart from "../assets/carts.png"
import { useState } from "react"

function Product(props) {

    const disp = useDispatch()

    const { title, id, price, thumbnail,description,warrantyInformation,reviews,shippingInformation } = props.data
    const [classname,setclassname] = useState(false)

    function addcart() {
        disp(addItemToCart(props.data))
        setclassname(!classname)

    }

    // component to display individual product details

    return (
        <div className="product">
            <div>
                <img src={thumbnail}></img>
            </div>
            <div>
                <p>{title}</p>
                <p>${price}</p>
                <p>{description}</p>
                <p>{warrantyInformation}</p>
                <p>{reviews.length} Reviews</p>
                <p style={{ fontFamily: "Raleway", fontSize: "1.2rem", fontWeight:"600" }}>{shippingInformation}</p>
                <NavLink to={`/productsdetails/${id}`}><p>View More</p></NavLink>
                <div onClick={addcart}>
                    <img src={cart}></img>
                    <button>Add to cart</button>
                </div>

                
            </div>
        </div>
       
    )

}

export default Product