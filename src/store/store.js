import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import favoritesSlice from "./slices/favoritesSlice";
import shoppingSlice from "./slices/shoppingSlice";

export default configureStore({
    reducer: {
        cart: cartSlice,
        favList: favoritesSlice,
        shoppingList: shoppingSlice,
    },
});
