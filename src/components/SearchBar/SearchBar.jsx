import './SearchBar.css';

function SearchBar() {
  return (
    <form className="search-bar">
      <span className="search-bar__eyebrow">Найти фильм или сериал</span>
      <div className="search-bar__row">
        <input
          type="text"
          className="search-bar__input"
          placeholder="Например: Joker, Interstellar, Dune…"
        />
        <button type="button" className="search-bar__button">Искать</button>
      </div>
    </form>
  );
}

export default SearchBar;
