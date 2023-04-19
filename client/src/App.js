import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Read from "./components/Read";

import Create from "./components/Create";
import Update from "./components/Update";
function App() {
  return (
    <>
    <div className="container">
      <BrowserRouter>
        <Routes>
          
            <Route exact path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
      </div>

    </>
  );
}

export default App;
