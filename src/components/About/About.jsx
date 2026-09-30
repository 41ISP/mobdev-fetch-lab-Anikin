import './About.css';

function About() {
  return (
    <section className="about">
      <h1 className="about__title">Об этом каталоге</h1>
      <p className="about__lead">
        Учебное приложение для поиска фильмов и сериалов, построенное поверх
        открытого каталога OMDb.
      </p>

      <div className="about__block">
        <h2 className="about__heading">Что такое OMDb</h2>
        <p className="about__text">
          OMDb (The Open Movie Database) — это открытый веб-сервис с базой
          данных о фильмах, сериалах и эпизодах: постеры, актёрский состав,
          жанры, даты выхода и рейтинги с разных площадок. Доступ к данным
          предоставляется через простой HTTP API по ключу.
        </p>
      </div>

      <div className="about__block">
        <h2 className="about__heading">Что умеет это приложение</h2>
        <ul className="about__list">
          <li>искать фильмы и сериалы по названию;</li>
          <li>показывать карточки с постером, годом и типом;</li>
          <li>открывать подробную страницу с описанием и рейтингами;</li>
          <li>отмечать понравившиеся фильмы как избранные.</li>
        </ul>
      </div>

      <div className="about__block">
        <h2 className="about__heading">Технологии</h2>
        <p className="about__text">
          React, запросы к OMDb API через fetch, состояние интерфейса
          (загрузка / ошибка / результат) на хуках useState и useEffect.
        </p>
      </div>
    </section>
  );
}

export default About;
