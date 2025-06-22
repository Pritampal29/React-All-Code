import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="error-body">
      <div className="error-container">
        <div className="error-code">404</div>
        <div className="error-message">Oops! Page Not Found</div>
        <div className="back-home">
          <button
            onClick={handleNavigate}
            className="btn btn-custom btn-lg me-3"
          >
            Go Back
          </button>
          <Link to="/" className="btn btn-custom btn-lg">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
