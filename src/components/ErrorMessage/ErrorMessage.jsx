import './ErrorMessage.css';

function ErrorMessage() {
  return (
    <div className="error-message" role="alert">
      <p className="error-message__title">Что-то пошло не так</p>
      <p className="error-message__text">
        Сервис OMDb недоступен. Проверьте соединение и попробуйте снова.
      </p>
    </div>
  );
}

export default ErrorMessage;
