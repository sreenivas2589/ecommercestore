
import { configureStore } from "@reduxjs/toolkit"
import Cartredux from "./store.jsx"

const Appstore = configureStore({
    reducer: {
        cart: Cartredux
    }
})


export default Appstore