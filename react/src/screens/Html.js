import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Html() {
  return (
    <>
      <div
        style={{
          paddingTop: 50,
          paddingBottom: 50,
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <img
          style={{ width: "40%", borderRadius: 7 }}
          className="imgagem"
          src="https://wallpapercave.com/wp/wp4923981.jpg"
          alt="First slide"
        />

        <div style={{ display: "flex", flexDirection: "column", background: "#737372", borderRadius: 12, padding: 10 }}>
          <input
            style={{ margin: 20, padding: 10, borderRadius: 7, border: "thin", width: 300 }}
            placeholder="Login"
          ></input>
          <input
            style={{ margin: 20, padding: 10, borderRadius: 7, border: "thin" }}
            placeholder="Senha"
          ></input>
        </div>
      </div>
    </>
  );
}


