"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
};

export const basketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{
        addToBasket:(state,action)=>{
            state.items=[...state.items, action.payload];
        },
        removeFromBasket:(state,action)=>{
            console.log(action.payload.id);
            const index = state.items.findIndex(
                (basketItem) => basketItem.id===action.payload.id
                );
                const tro = index;

            let newBasket = [...state.items];
            console.log({index});
            if(index>=0){
                console.log({index});
                newBasket.splice(index, 1);
                console.log({index});
            }else{
                console.warn('cant remove product');
            }
            state.items = newBasket;
        },
    },
});

export const {addToBasket, removeFromBasket} = basketSlice.actions

export const SelecItems = (state) =>state.basket.items;
export  const selectTotal = (state) => state.basket.items.reduce((total, item)=>total+item.price, 0);

export default basketSlice.reducer;