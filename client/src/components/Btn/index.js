import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function ViewBtn(props) {
  return (
    <button style={{ float: "left", marginTop: 20, width: 180 }} className="btn btn-dark" {...props}>
      View
    </button>
  );
}

export function SaveBtn(props) {
  return (
    <button style={{ float: "left", marginTop: 20, width: 180 }} className="btn btn-dark" {...props}>
      Save
    </button>
  );
}

export function DeleteBtn(props) {
  return (
    <button style={{ float: "left", marginTop: 20, width: 180 }} className="btn btn-dark" {...props}>
      Delete
    </button>
  );
}
