import {configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductSlice";
import cartSlice from "./CartSlice";
const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice
    }
})
export default store
