
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0 
}

const counterSlice = createSlice({
    name: 'counter', 
    initialState: initialState, 
    reducers: {
        increment(state) {
            state.counter++
        }, 
        decrement(state) {
            state.counter--
        }, 
        add(state, action) {
            state.counter = state.counter + action.payload 
        }
    }
})

export const counterActions = counterSlice.actions
export default counterSlice.reducer