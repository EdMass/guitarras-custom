import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 NotFoundPage</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
