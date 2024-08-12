/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
    name: "shopping",
    initialState: {
        shoppingList: [],
        totalCount: 0,
        totalPrice: 0,
    },
    reducers: {
        addToShopping(state, action) {
            const item = state.shoppingList.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.count += 1;
            } else {
                state.shoppingList.push({ ...action.payload, count: 1 });
            }
            state.totalCount += 1;
            state.totalPrice += action.payload.price;
        },
        incrementItemCount: (state, action) => {
            const item = state.shoppingList.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.count += 1;
                state.totalCount += 1;
                state.totalPrice += item.price;
            }
        },
        decrementItemCount: (state, action) => {
            const item = state.shoppingList.find(
                (item) => item.id === action.payload.id
            );
            if (item && item.count > 1) {
                item.count -= 1;
                state.totalCount -= 1;
                state.totalPrice -= item.price;
            } else if (item && item.count === 1) {
                state.totalCount -= 1;
                state.totalPrice -= item.price;
                state.shoppingList = state.shoppingList.filter(
                    (item) => item.id !== action.payload.id
                );
            }
        },

        removeFromShooping(state, action) {
            const item = state.shoppingList.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                state.totalCount -= item.count;
                state.totalPrice -= item.price * item.count;
                state.shoppingList = state.shoppingList.filter(
                    (item) => item.id !== action.payload.id
                );
            }
        },
        emptyShopping(state, action) {
            state.shoppingList = [];
            state.totalCount = 0;
            state.totalPrice = 0;
        },
    },
});

export const {
    addToShopping,
    incrementItemCount,
    decrementItemCount,
    removeFromShooping,
    emptyShopping,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
