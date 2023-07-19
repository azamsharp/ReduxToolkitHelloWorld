import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from './store/counter'
import { authActions } from './store/auth';
import { fetchMovies } from './store/movies';

function App() {

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.ctr.counter)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const movies = useSelector((state) => state.movies.movies)

  const movieItems = movies.map(movie => {
      return <li key = {movie.imdbID}>{movie.Title}</li>
  })

  return (
    <div className="App">
      {isAuthenticated ? "Authenticated": "Not Authenticated"}
      <h1>{counter}</h1>
      <button onClick = {() => dispatch(counterActions.increment())}>Increment</button>
      <button onClick = {() => dispatch(counterActions.decrement())}>Decrement</button>
      <button onClick = {() => dispatch(counterActions.add(10))}>Add +10</button>
      <button onClick = {() => dispatch(authActions.login())}>Login</button>
      <button onClick = {() => dispatch(authActions.logout())}>Logout</button>
      <button onClick = {() => dispatch(fetchMovies())}>Fetch Movies</button>
      <ul>
        {movieItems}
      </ul>
    </div>
  );
}

export default App;
