import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./main/mainReducer";

const store = configureStore({
  reducer: {
    contacts: mainReducer,
  },
});
export default store;
