const LoadingSpinner = () => {
  return (
    <>
      <center className="spinner">
        <button class="btn btn-primary" type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
          <span class="visually-hidden" role="status">
            Loading...
          </span>
        </button>
        <button class="btn btn-primary" type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
          <span role="status">Loading...</span>
        </button>
      </center>
    </>
  );
};
export default LoadingSpinner;
