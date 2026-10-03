
import LikeButton from '../LikeButton/LikeButton';
import RatingBadge from '../RatingBadge/RatingBadge';
import './MovieDetails.css';
import { useNavigate } from 'react-router-dom';

export default function MovieDetails({ movie }) 
{
  const navigate = useNavigate()
  return(
    <article className="movie-details">
      <div className='container'>
      <button type="button" className="movie-details__back"
      onClick={() => navigate(-1)}>
        ← Ко всем фильмам
      </button>
      </div>
      <div className="movie-details__layout">
        <div className="movie-details__poster-col">
          <img
            className="movie-details__poster"
            src={movie.Poster}
            alt={movie.Title}
          />
          
        </div>

        <div className="movie-details__main">
          <div className="movie-details__heading">
            <div>
              <h1 className="movie-details__title">{movie.Title}</h1>
              <p 
              className="movie-details__meta"> 
              {movie.Year} {movie.Rated} {movie.Runtime}
              </p>
            </div>
            <LikeButton />
          </div>

          <p 
          className="movie-details__Genre">{movie.Genre}
          </p>

          <p className="movie-details__Plot">
            {movie.Plot}
          </p>

          <div className="movie-details__ratings">
            {movie.Ratings.map(rating => (
              <RatingBadge
              key={rating.Source}
              source={rating.Source}
              value={rating.Value}
              />
            ))}
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
