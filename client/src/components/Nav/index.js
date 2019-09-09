import React from "react";

function Nav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-success">
      <div className="row">
        <div className="col-8">
          <h2>MERN Google Books </h2>
        </div>
        <div className="col-2">
          <a className="navbar-brand" href="/Search">
            Search
        </a>
        </div>
        <div className="col-2">
          <a className="navbar-brand" href="/Savedbooks">
            Saved
        </a>
        </div>
      </div>
    </nav >
  );
}

export default Nav;
