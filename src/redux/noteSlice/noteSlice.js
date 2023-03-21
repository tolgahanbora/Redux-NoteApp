import {createSlice} from '@reduxjs/toolkit'

export const noteReducer = createSlice({
    name: "note",
    initialState: {
     items: [],
     color: "red"   
    },
    reducers: {
        addNote: (state,action) => {
            state.items.push(action.payload)
     
        }
    }
})


export const {addNote} = noteReducer.actions
export default noteReducer.reducer