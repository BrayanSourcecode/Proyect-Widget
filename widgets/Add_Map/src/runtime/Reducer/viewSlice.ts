import { createSlice } from "@reduxjs/toolkit"
import { ImmutableObject } from 'jimu-core';

interface MyState {
  view: object,

}

export const initialstate:MyState = {
  view:{t:"fgdsf",b:"fsdfsd"}
}

export const viewSlice = createSlice({
  name: "view",
  initialState: initialstate,
  reducers: {
    addView: (state, action) => {
      state.view = action.payload
    }
  }
})


export default viewSlice.reducer

export const { addView } = viewSlice.actions