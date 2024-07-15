import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";
import counterReducer from "./counterSlice";


export const store = configureStore({
    reducer:{
        todos:todosReducer,
        counter:counterReducer,
},
});

