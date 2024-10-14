import { configureStore } from "@reduxjs/toolkit";
import appSlice from './slice';

const appStore = configureStore({
    reducer: {
        storeItems: appSlice, // This is correct
    },
});

export default appStore;
