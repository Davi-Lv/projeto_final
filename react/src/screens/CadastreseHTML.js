import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { InputHTML } from "./InputHTML";

export default function CadastreseHTML() {
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#0d6efd",
            borderRadius: 12,
            padding: 10,
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white", fontWeight: "bold" }}>Cadastrar</h1>
          <br />
          <input
            id="nome"
            type={"text"}
            style={{
              width: 300,
              marginBottom: 20,
              padding: 10,
              borderRadius: 7,
              border: "thin",
              width: 300,
            }}
            placeholder="Nome"
          />
          <input
            id="email"
            type={"email"}
            style={{
              width: 300,
              marginBottom: 20,
              padding: 10,
              borderRadius: 7,
              border: "thin",
              width: 300,
            }}
            placeholder="E-mail"
          />
          <input
            id="senha"
            type={"password"}
            style={{
              width: 300,
              marginBottom: 20,
              padding: 10,
              borderRadius: 7,
              border: "thin",
              width: 300,
            }}
            placeholder="Senha"
          />
          <Link to={"/"}>
            <button
              type="submit"
              style={{
                width: 300,
                borderRadius: 10,
                background: "#031A3D",
                fontWeight: "bold",
                color: "white",
                border: "none",
                padding: 10,
                margin: 20,
              }}
            >
              Cadastrar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
