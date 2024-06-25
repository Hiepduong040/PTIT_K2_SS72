import  reducerUser  from "./reducers/userReducer"
import { configureStore } from "@reduxjs/toolkit"


export const store = configureStore({
    reducer:{
        user: reducerUser,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
