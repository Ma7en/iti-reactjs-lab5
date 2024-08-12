import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartBody: [1, 2, 3],
        count: 3,
    },
    reducers: {
        addItemtoCart(state, action) {
            const arg = action.payload;
            state.cartBody.push(arg);
        },
        removeItemFromCart(state) {
            state.cartBody.slice(1);
        },
        emptyCart(state) {
            state.cartBody = [];
        },
    },
});

export const { addItemtoCart, removeItemFromCart, emptyCart } =
    cartSlice.actions;

export default cartSlice.reducer;
