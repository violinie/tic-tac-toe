import React from "react";

export default function Square(props) {
  return (
    <>
      <div
        className="square"
        onClick={() => {
          props.onClick(props.coords);
        }}
      >
        {props.value}
      </div>
    </>
  );
}
