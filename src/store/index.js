import { configureStore } from "@reduxjs/toolkit";
import items from "../components/itemList/itemsSlice";

const store = configureStore({
  reducer: { items },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
