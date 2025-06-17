// JavaScript source code
import { removeItemFromCart, increaseItemQuantity, removeItem } from "../redux/store.jsx"
import { useDispatch } from "react-redux"
//import { useSelector } from 'react-redux'
import plus from "../assets/plus.png"
import minus from "../assets/remove.png"
import clear from "../assets/clear.png"

// Cartitem component to display individual cart items with options to increase/decrease quantity or remove the item
function Cartitem(props) {

    const { title, quantity, price } = props.data

    const dispatch = useDispatch()


    return (
        <tbody>
            <tr>
                <td>{title}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{(price * quantity).toFixed(2)}</td>
                <td>
                    <button onClick={() => dispatch(removeItemFromCart(props.data))}><img src={minus}></img></button>
                    <button onClick={() => dispatch(increaseItemQuantity(props.data))}><img src={plus}></img></button>
                </td>
                <td><button onClick={() => dispatch(removeItem(props.data))}><img src={clear}></img></button></td>
            </tr>
        </tbody>

    )
}

export default Cartitem