export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <p className="loader-text">Sorular yükleniyor...</p>
      </div>
    </div>
  );
}
