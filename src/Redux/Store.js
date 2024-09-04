import { configureStore } from "@reduxjs/toolkit";
import items_In_Cart_Slice from "./Features/items_In_Cart";

export const store = configureStore({
  reducer: {
    cartItemCounter: items_In_Cart_Slice,
  },
});
