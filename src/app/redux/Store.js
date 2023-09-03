import { configureStore, createReducer } from "@reduxjs/toolkit";
import basketReducer from './BasketSlice'
const store =configureStore({
    reducer:{
        basket:basketReducer
    }
})

export default store;