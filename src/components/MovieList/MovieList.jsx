import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

function MovieList() {
  return (
    <ul className="movie-list">
      <li><MovieCard /></li>
      <li><MovieCard /></li>
      <li><MovieCard /></li>
      <li><MovieCard /></li>
      <li><MovieCard /></li>
      <li><MovieCard /></li>
      <li><MovieCard /></li>
      <li><MovieCard /></li>
    </ul>
  );
}

export default MovieList;
