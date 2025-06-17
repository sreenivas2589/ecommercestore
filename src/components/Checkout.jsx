import { useSelector } from 'react-redux'
import {useState } from "react"
import emptycart from "../assets/empty-cart.jpg"
import { useDispatch } from "react-redux"
import { clearCart } from "../redux/store.jsx"

function Checkout() {
    const cart = useSelector((state) => state.cart)
    console.log(cart.items)

    const disp = useDispatch()

    const [orderplaced, setorderplaced] = useState(false)
    const [display, setdisplay] = useState(true)
    const [name, setname] = useState("")
    const [address, setaddress] = useState("")
    const [city, setcity] = useState("")
    const [state, setstate] = useState("")
    const [zipcode, setzipcode] = useState("")
    const [phone, setphone] = useState("")

    function handleSubmit() {
        if (!name || !address || !city || !state || !zipcode || !phone) {
            alert("Please fill all the fields")
            return false;
        }

        else {
            setorderplaced(true)
            setdisplay(false)
            disp(clearCart())
        }
    }

    //checkout component to handle the checkout process and display order details

    return (
        <>
            {cart.items.length === 0 ? (
                <div className={orderplaced ? "emptycartnone" : "emptycart"}>
                    <div>
                        <img src={emptycart}></img>
                    </div>
                    <div>
                        <p>Missing Items in Checkout Page?</p>
                        <p>Add products.......</p>
                    </div>
                </div>
            
            ) : (
                <div className={display ? "checkout" : "checkoutnone"}>
                    <div className="checkoutinput">
                            <p>Checkout Page</p>
                    </div>
                    <div className="checkoutinput">
                            
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="Enter your Name" id="name" required onChange={(e)=>setname(e.target.value)}/>
                        
                        
                                <label htmlFor="address">Address</label>
                                <input type="text" placeholder="Enter your Address" id="address" required onChange={(e)=>setaddress(e.target.value)}/>
                        
                        
                                <label htmlFor="city">City</label>
                                <input type="text" placeholder="Enter your City" id="city" required onChange={(e)=>setcity(e.target.value)}/>
                        
                        
                                <label htmlFor="state">State</label>
                                <input type="text" placeholder="Enter your State" id="state" required onChange={(e)=>setstate(e.target.value)}/>
                        
                                <label htmlFor="zipcode">Zip</label>
                                <input type="text" placeholder="Enter your Zip Code" id="zipcode" required onChange={(e)=>setzipcode(e.target.value)}/>
                        
                                <label htmlFor="phone">Phone</label>
                                <input type="text" placeholder="Enter your Phone Number" id="phone" required onChange={(e)=>setphone(e.target.value)}/>
                        
                                <button onClick={()=>handleSubmit()}>Place Order</button>
                    </div>
                    </div>
                  )

            }
            (
            <div style={orderplaced ? { display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center", color: "white", gap: "20px", fontSize: "1.6rem", fontFamily: "Raleway" } : { display: "none" }}>
                <p>Order Placed Successfully</p>
                <p>Your Order will be delivered soon</p>
                <p>Cart will be now empty</p>
                <p>Shipping Details</p>
                <p>{name}, {address}, {state}, {city}, {zipcode}</p>
            </div>
            )
        </>
        
    )
}

export default Checkout;