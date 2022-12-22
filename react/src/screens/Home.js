import { Link } from "react-router-dom";
import "./App.css";
import React from "react";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: 100}}>
      <Link to={"/Bootstrap"}>
        <button style={{ margin: 20, padding: 10, borderRadius: 12, border: 'thin'}}>Pagina com Bootstrap</button>
      </Link>
      <Link to={"/Html"}>
        <button style={{ margin: 20, padding: 10, borderRadius: 12, border: 'thin' }}>Pagina apenas com HTML</button>
      </Link>
    </div>
  );
}
