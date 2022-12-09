import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 Error</h1>
      <p>Page Not Exists</p>
      <Link
        to="/"
        className="text-decoration-none text-danger text-uppercase font-weight-bolder"
      >
        Back to the Home Page...
      </Link>
    </div>
  );
};

export default NotFound;
