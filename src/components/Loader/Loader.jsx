import './Loader.css';

function Loader() {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="loader__reel" aria-hidden="true" />
      <span className="loader__label">Загружаем данные…</span>
    </div>
  );
}

export default Loader;
