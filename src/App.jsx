import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global/styles/global.scss";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
