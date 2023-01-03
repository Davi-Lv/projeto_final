import { Link } from "react-router-dom";
import "./App.css";
import React from "react";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 100,
      }}
    >
      <div
        style={{
          width: 250,
          height: 250,
          borderRadius: 20,
          background: "#031a3d ",
          textAlign: "center",
          color: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 15,
          flexDirection: "column",
          fontWeight: "bold",
          padding: 20
        }}
      >
        <img
          style={{ height: 120, display: "flex" }}
          src="https://cdn-icons-png.flaticon.com/512/9073/9073243.png"
          alt="home"
        />
        <br/>
        <h1
          style={{
            margin: 0,
          }}
        >
          Tela inicial
        </h1>
      </div>
      <Link to={"/Bootstrap"}>
        <button
          style={{
            padding: 10,
            borderRadius: 20,
            border: "thin",
            width: 250,
            background: "#031a3d ",
            color: "#FFFFFF",
            margin: 15,
            fontWeight: "bold",
            padding: 20
          }}
        >
          Pagina com Bootstrap
        </button>
      </Link>
      <Link to={"/Html"}>
        <button
          style={{
            padding: 10,
            borderRadius: 20,
            border: "thin",
            width: 250,
            background: "#031a3d",
            color: "#FFFFFF",
            margin: 15,
            fontWeight: "bold",
            padding: 20
          }}
        >
          Pagina apenas com HTML
        </button>
      </Link>
    </div>
  );
}
