import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import BandDetalhes from "./pages/BandDetalhes";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/band/:id" element={<BandDetalhes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// npm install react-router-dom (pacote para a navegação entre as páginas)