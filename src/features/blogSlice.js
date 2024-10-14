import {createSlice} from "@reduxjs/toolkit"

const intial={
    blogs:[]
}

const blogSlice=createSlice({
    name:"blogs",
    initialState:intial,
    reducers:{
        addB:(state,action)=>{
            state.blogs.push(action.payload)
        },
        deleteB:(state,action)=>{
            const update=state.blogs.filter((blogs)=>blogs.id!=action.payload)
            state.blogs=update;
        },
        edit:(state,action)=>{
            const {id,titleU,contentU}=action.payload;
            const exist=state.blogs.find((data)=>data.id===parseInt(id))

            if(exist){
                exist.title=titleU;
                exist.content=contentU
            }
        }
    }
})

export default blogSlice.reducer;
export const {addB,deleteB,edit}= blogSlice.actions;