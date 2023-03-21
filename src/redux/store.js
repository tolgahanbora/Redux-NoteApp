import {configureStore} from '@reduxjs/toolkit'
import {noteSlice} from './noteSlice/noteSlice'
export const store = configureStore({
reducer:{
    notes: noteSlice
}
})



