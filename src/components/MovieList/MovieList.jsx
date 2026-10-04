import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

export default function MovieList({ movies =[] }) {
  if (movies.length === 0) {
    return(
    <p className="movie-list-empty">
    Введите запрос
  </p>
    )
  }
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <MovieCard movie={movie} />
        </li>
      )
    )
  }
  </ul>
  )
}

