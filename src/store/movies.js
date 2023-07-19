
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = 'https://www.omdbapi.com/?s=Batman&page=2&apiKey=564727fa'

const initialState = {
    movies: [] 
}

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async() => {
    const response = await fetch(BASE_URL)
    const data = await response.json() 
    return data 
})

const moviesSlice = createSlice({
    name: 'movies', 
    initialState: initialState, 
    reducers: {
        // 
    }, 
    extraReducers(builder) {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload.Search
        })
    }
})

export default moviesSlice.reducer 