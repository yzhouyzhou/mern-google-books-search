import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SavedBtn(props) {
  return (
    <button className="btn save-btn btn-darkgray" {...props}>
      save this book
    </button>
  );
}
export default SavedBtn;
