import React from "react";

function Nav() {
  return (
    <nav style={{ backgroundColor: "darkgreen", color: "wheat" }} className="navbar fixed-top navbar-expand-lg navbar-dark">
      <div className="row">
        <div className="col-8">
          <h2>MERN Google Books </h2>
        </div>
        <div className="col-2">
          <a className="navbar-brand" href="/Search" style={{ color: "wheat" }}>
            Search
        </a>
        </div>
        <div className="col-2">
          <a className="navbar-brand" href="/Savedbooks" style={{ color: "wheat" }}>
            Saved
        </a>
        </div>
      </div>
    </nav >
  );
}

export default Nav;
