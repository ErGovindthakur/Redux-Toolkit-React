// Creating our slice here

import { createSlice } from "@reduxjs/toolkit";

const slice2 = createSlice({
     name:'AddName',
     initialState:{
          myName : 'Govinda'
     },
     reducers:{
          showName: (state, action) => {
               state.myName='Govinda'
          },
          hideName: (state,action) => {
               state.myName
          }
     }
})

export const {showName,hideName} = slice2.actions
export default slice2.reducer