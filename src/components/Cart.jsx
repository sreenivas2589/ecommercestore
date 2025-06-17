// JavaScript source code
import { useSelector } from 'react-redux'
//import { removeItemFromCart } from "../redux/store.jsx" 
import { clearCart } from "../redux/store.jsx" 
import { useDispatch } from "react-redux"
import Cartitem from './Cartitem.jsx'
import emptycart from "../assets/empty-cart.jpg"
import { NavLink } from "react-router-dom"

function Cart() {
    const cart = useSelector((state) => state.cart)
    const disp = useDispatch()

    console.log(cart.items)
    console.log(cart.itemstotal)
    console.log(cart.totalQuantity)

    return (
        <div>
            {cart.items.length === 0 ?
                (
                    <div className="emptycart">
                        <div>
                            <img src={emptycart}></img>
                        </div>
                        <div>
                            <p>Missing Cart items?</p>
                            <p>Add products.......</p>
                        </div>
                    </div>
                    ) : (
                    <div className="tablecart">
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total Price</th>
                                    <th>Inc/Dec</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            {cart.items.map((item) => {

                                return (
                                    <Cartitem data={item} key={item.uniqueId} />
                                )

                            })}


                        </table>
                        <h1>Total:${(cart.items.length > 0) ? (cart.itemstotal).toFixed(2) : ""}</h1>
                        <br></br>
                        <div className="clearcart">
                            <button onClick={() => disp(clearCart())}>Clear Cart</button>
                            <NavLink to="/checkout"><button>Checkout</button></NavLink>
                        </div>

                    </div>

                )}
            
        </div>
    )

}


export default Cart