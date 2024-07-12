import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default NotFoundPage;
