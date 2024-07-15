import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{value:0},
    reducer:{
        increment:(state)=>{
            state.value += 1;
        },
        decrement:(state)=>{
            state.value -= 1;
        },
        reset:(state)=>{
            state.value = 0;
        },
        incrementbyValue:(state,action)=>{
            state.value += action.payload;
        },
       decrementbyValue:(state,action)=>{
            state.value -= action.payload;
        },
       
    }
})

export const {increment,decrement,reset,incrementbyValue,decrementbyValue} = counterSlice.actions;
export default counterSlice.reducer;