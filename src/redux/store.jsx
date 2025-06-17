// JavaScript source code
// JavaScript source code
import { createSlice } from "@reduxjs/toolkit"

// initial state for the cart slice

const initial = {
    items: [],
    totalQuantity: 0,
    itemstotal: 0

}

const calculateTotals = (items) => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const total = subtotal
    return total 
}

//using redux and redux toolkit to manage the cart state in an e - commerce application.

const Cartredux = createSlice({
    name: "cart",
    initialState: initial,
    reducers: {
        addItemToCart: (state, action) => {
            const exisiting = state.items.find((item) => item.id === action.payload.id)

            if (exisiting) {
                exisiting.quantity = exisiting.quantity + 1
                
                state.itemstotal = state.itemstotal + (action.payload.price * action.payload.quantity)

            }
            else {
                state.items.push({ ...action.payload, quantity: 1 });
                
            }
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            const totals = calculateTotals(state.items)
            state.itemstotal = totals

        },

        increaseItemQuantity: (state, action) => {
            const exisiting = state.items.find((item) => item.id === action.payload.id)

            if (exisiting) {
                exisiting.quantity = exisiting.quantity + 1
            }

            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0)
            const totals = calculateTotals(state.items)
            state.itemstotal = totals

        },
        removeItemFromCart: (state, action) => {
            const ind = state.items.findIndex((item) => item.id === action.payload.id)

            const exisiting = state.items.find((item) => item.id === action.payload.id)
            if (exisiting) {
                state.items[ind].quantity = state.items[ind].quantity - 1
                
            }

            
            
            if (state.items[ind].quantity === 0) {
                state.items.splice(ind, 1)
            }

            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0)
            const totals = calculateTotals(state.items)
            state.itemstotal = totals

        },
        removeItem: (state, action) => {
            const ind = state.items.findIndex((item) => item.id === action.payload.id)

            state.items.splice(ind, 1)

            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            const totals = calculateTotals(state.items)
            state.itemstotal = totals

        },
        clearCart: (state) => {
            state.totalQuantity = 0 
            state.items = []
            state.totalQuantity = 0
            state.itemstotal = 0
        }
    }
}
)


export const { addItemToCart, increaseItemQuantity,removeItemFromCart,removeItem, clearCart } = Cartredux.actions

export default Cartredux.reducer