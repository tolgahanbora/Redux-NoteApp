import { color } from '@mui/system'
import {createSlice} from '@reduxjs/toolkit'

export const noteReducer = createSlice({
    name: "note",
    initialState: {
     items: [],
     color: ""
    },
    reducers: {
        addNote: (state,action) => {
            state.items.push(action.payload)
            
        },
        addColor: (state,action) => {
            state.color = action.payload
        
    }
}}
)


export const {addNote,addColor} = noteReducer.actions
export default noteReducer.reducer