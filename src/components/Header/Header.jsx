import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo">
          <span className="header__logo-mark">OMDb</span>
          <span className="header__logo-sub">кинокаталог</span>
        </a>

        <nav className="header__nav">
          <a href="#" className="header__nav-link header__nav-link--active">
            Главная
          </a>
          <a href="#" className="header__nav-link">
            Избранное
          </a>
          <a href="#" className="header__nav-link">
            О проекте
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
