import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
     name:'counterSlice',
     initialState:{
         addColor : 'black'
     },
     reducers:{
          addItems: (state , action) => {
               state.cartItem = action.payload
          },
          removeItems : (state,action) => {
               state.cartItem.shift(action.payload)
          }
     }
})


export const {addItems,removeItems} = appSlice.actions
export default appSlice.reducer