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
          padding: 15
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
            width: 250,
            borderRadius: 20,
            background: "#031A3D",
            fontWeight: "bold",
            color: "white",
            border: "none",
            padding: 15,
            fontWeight: "bold",
            margin: 20
          }}
        >
          Pagina com Bootstrap
        </button>
      </Link>
      <Link to={"/Html"}>
        <button
          style={{
            width: 250,
            borderRadius: 20,
            background: "#031A3D",
            fontWeight: "bold",
            color: "white",
            border: "none",
            padding: 15,
            fontWeight: "bold",
          }}
        >
          Pagina apenas com HTML
        </button>
      </Link>
    </div>
  );
}