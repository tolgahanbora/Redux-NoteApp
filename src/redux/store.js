import {configureStore} from '@reduxjs/toolkit'
import {noteReducer} from './noteSlice/noteSlice'

export const store = configureStore({
reducer:{
    note: noteReducer.reducer
}
})




