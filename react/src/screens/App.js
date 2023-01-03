import React from "react";

import { Route, Routes, Link, BrowserRouter } from "react-router-dom";

import Bootstrap from "./Bootstrap";
import Home from "./Home";
import Html from "./Html";
import Cadastrese from "./Cadastrese";
import CadastreseHTML from "./CadastreseHTML";

export default function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Bootstrap" element={<Bootstrap />} />
            <Route path="/Html" element={<Html />} />
            <Route path="/cadastrar" element={<Cadastrese />} />
            <Route path="/cadastrarHTML" element={<CadastreseHTML />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}
