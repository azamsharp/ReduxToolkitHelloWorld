
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './auth'
import moviesReducer from './movies'

const store = configureStore({
    reducer: {
        ctr: counterReducer, 
        auth: authReducer, 
        movies: moviesReducer
    }
})

export default store 
