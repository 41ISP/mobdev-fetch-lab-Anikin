import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">
          Учебный проект. Данные о фильмах предоставлены{' '}
          <a
            href="https://www.omdbapi.com/"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            OMDb API
          </a>
          .
        </p>
        <p className="footer__year">2026</p>
      </div>
    </footer>
  );
}

export default Footer;
