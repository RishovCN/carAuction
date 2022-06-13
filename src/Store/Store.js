import { configureStore } from "@reduxjs/toolkit";

import  userReducer  from "../slice/userSlice";
import carDetailsReducer from "../slice/carDetailSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        carDetails: carDetailsReducer
    }
})

export default store