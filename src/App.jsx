import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global/styles/global.scss";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthProvider } from "./Hooks/verify";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
