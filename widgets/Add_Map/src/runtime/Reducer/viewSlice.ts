import {createSlice} from "@reduxjs/toolkit"
import MapView from "esri/views/MapView"
interface Mystate{
    view:string
}

 export const initialstate:Mystate={
    view:"estado inicial donde debe de ir el view"
}


export const viewSlice=createSlice({
    name:"view",
    initialState:initialstate,
    reducers:{
        addView:(state,action)=>{
            state.view=action.payload
        }
      

    }
})


export default viewSlice.reducer

export const {addView}=viewSlice.actions