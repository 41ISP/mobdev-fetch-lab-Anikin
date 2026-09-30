import LikeButton from '../LikeButton/LikeButton';
import RatingBadge from '../RatingBadge/RatingBadge';
import './MovieDetails.css';

function MovieDetails() {
  return (
    <article className="movie-details">
      <button type="button" className="movie-details__back">
        ← Ко всем фильмам
      </button>

      <div className="movie-details__layout">
        <div className="movie-details__poster-col">
          <img
            className="movie-details__poster"
            src="https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
            alt="Joker"
          />
        </div>

        <div className="movie-details__main">
          <div className="movie-details__heading">
            <div>
              <h1 className="movie-details__title">Joker</h1>
              <p className="movie-details__meta">2019 · R · 122 min</p>
            </div>
            <LikeButton />
          </div>

          <p className="movie-details__genre">Crime, Drama, Thriller</p>

          <p className="movie-details__plot">
            Arthur Fleck, a party clown and a failed stand-up comedian, leads an
            impoverished life with his ailing mother. However, when society
            shuns him and brands him as a freak, he decides to embrace the life
            of chaos in Gotham City.
          </p>

          <div className="movie-details__ratings">
            <RatingBadge />
            <div className="rating-badge">
              <span className="rating-badge__value">68%</span>
              <span className="rating-badge__source">Rotten Tomatoes</span>
            </div>
            <div className="rating-badge">
              <span className="rating-badge__value">59/100</span>
              <span className="rating-badge__source">Metacritic</span>
            </div>
          </div>

          <dl className="movie-details__facts">
            <div className="movie-details__fact"><dt>Режиссёр</dt><dd>Todd Phillips</dd></div>
            <div className="movie-details__fact"><dt>Сценарий</dt><dd>Todd Phillips, Scott Silver, Bob Kane</dd></div>
            <div className="movie-details__fact"><dt>В ролях</dt><dd>Joaquin Phoenix, Robert De Niro, Zazie Beetz</dd></div>
            <div className="movie-details__fact"><dt>Дата выхода</dt><dd>04 Oct 2019</dd></div>
            <div className="movie-details__fact"><dt>Язык</dt><dd>English, German</dd></div>
            <div className="movie-details__fact"><dt>Страна</dt><dd>United States, Canada, Australia</dd></div>
            <div className="movie-details__fact"><dt>Награды</dt><dd>Won 2 Oscars. 120 wins &amp; 247 nominations total</dd></div>
            <div className="movie-details__fact"><dt>Сборы</dt><dd>$335,477,657</dd></div>
          </dl>
        </div>
      </div>
    </article>
  );
}

export default MovieDetails;
