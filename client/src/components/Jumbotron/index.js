import React from "react";
import Background from "./math-background.jpg"

function Jumbotron({ children }) {
  var backgroundStyle = {
    width: "100%",
    height: "280px",
    background: `url(${Background}) no-repeat`,
    backgroundSize: "cover",
    clear: "both",
    paddingTop: 100,
    marginTop: 55,
    border: "3px solid gray",
    textAlign: "center"
  };
  return (
    <div style={backgroundStyle} className="jumbotron">
      {children}
    </div>
  );
}

export default Jumbotron;
