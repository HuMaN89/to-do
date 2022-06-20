import { configureStore } from "@reduxjs/toolkit";
import items from "../reducer";

const store = configureStore({
  reducer: { items },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
