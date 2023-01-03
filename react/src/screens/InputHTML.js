import React from "react";

export function InputHTML(props) {
  return (
    <>
      <input
        style={{
          width: 300,
          marginBottom: 20,
          padding: 10,
          borderRadius: 7,
          border: "thin",
          width: 300,
        }}
        placeholder={props.placeholderInput}
      />
    </>
  );
}
