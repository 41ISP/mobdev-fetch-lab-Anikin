import LikeButton from '../LikeButton/LikeButton';
import './MovieCard.css';

function MovieCard() {
  return (
    <article className="movie-card">
      <button type="button" className="movie-card__poster-button" aria-label="Открыть страницу фильма «Joker»">
        <img
          className="movie-card__poster"
          src="https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
          alt="Joker"
        />
        <span className="movie-card__type">Фильм</span>
      </button>

      <div className="movie-card__like">
        <LikeButton />
      </div>

      <div className="movie-card__info">
        <h3 className="movie-card__title" title="Joker">Joker</h3>
        <p className="movie-card__year">2019</p>
      </div>
    </article>
  );
}

export default MovieCard;
