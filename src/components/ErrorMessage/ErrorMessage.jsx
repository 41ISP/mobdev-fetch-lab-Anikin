import './ErrorMessage.css';

export default function ErrorMessage({ message }) {
  return (
    <div className="error-message" role="alert">
      <p className="error-message__title">Что-то пошло не так</p>
      <p className="error-message__text"> {message}
      </p>
    </div>
  );
}