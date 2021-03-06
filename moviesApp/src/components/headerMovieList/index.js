import React from "react";

const Header = ({ title, numMovies }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-4">
        <h2>
          {`${title}  `}
          
          <span className="badge badge-pill badge-success">{numMovies}</span>
        </h2>
        <h3>---This is the list of movies!---

        </h3>
      </div>
    </div>
  );
};

export default Header;