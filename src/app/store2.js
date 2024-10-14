// Creating our second store for redux-toolkit

import { configureStore } from "@reduxjs/toolkit"
import slice2 from './Slice2'

const store2 = configureStore({
     reducer:{
          tell : slice2
     }
})

export default  store2