import './LikeButton.css';

function LikeButton() {
  return (
    <button
      type="button"
      className="like-button like-button--active"
      aria-pressed="true"
      aria-label="Убрать из избранного"
    >
      <svg
        className="like-button__icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 20.5s-7.5-4.6-10-9.3C0.4 8 1.6 4.6 4.7 3.6c2.2-.7 4.4.1 5.6 2 .3.4.5.8.7 1.2.2-.4.4-.8.7-1.2 1.2-1.9 3.4-2.7 5.6-2 3.1 1 4.3 4.4 2.7 7.6-2.5 4.7-10 9.3-10 9.3Z" />
      </svg>
    </button>
  );
}

export default LikeButton;
