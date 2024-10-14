import {configureStore} from "@reduxjs/toolkit"
import blogSlice from "../features/blogSlice"

const store=configureStore({
    reducer:{
        Nblog:blogSlice
    }
})

export default store