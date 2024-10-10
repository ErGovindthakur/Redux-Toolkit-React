import {createSlice} from '@reduxjs/toolkit' // initialize rtk (createSlice)

const initialState = {
     value : 0 // Setting our initial value
}

export const counterSlice = createSlice({
     name:'counter', // creating our slice here
     initialState,

     reducers:{ // initializing our reducers here
          // initializing our multiple methods
          increment : (state) => {
               state.value += 1
          },
          decrement: (state) => {
               state.value -= 1
          },
          incrementByAmount:(state,action) => {
               state.value += action.payload
          },
     },
})

export const {increment,decrement,incrementByAmount} = counterSlice.actions

export default counterSlice.reducer