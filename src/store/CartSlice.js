import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
    isShown: false,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.cart.find(item => item.id === newItem.id)
            if (!existingItem) {
                state.cart.push({
                    id: newItem.id,
                    title: newItem.title,
                    quantity: 1,
                    total: +newItem.price,
                    price: +newItem.price,
                    img: newItem.img
                })
            } else {
                existingItem.quantity++
                existingItem.total = +(existingItem.total + newItem.price).toFixed(2)
            }
        },
        removeFromCart(state, action) {
            const it = action.payload
            const existingItem = state.cart.find(item => item.id === it.id)
            if (existingItem.quantity === 1) {
                state.cart = state.cart.filter(item => item.id !== it.id)
            } else {
                existingItem.quantity--
                existingItem.total = existingItem.total - existingItem.price
            }
        },
        toggleCart(state,action) {
            state.isShown = action.payload 
        }

    }
})
export const cartActions = cartSlice.actions
export default cartSlice.reducer