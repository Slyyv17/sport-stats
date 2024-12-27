// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard"; // Sidebar
import Home from "./pages/Home"; // Main content for Home
import Settings from "./pages/Settings"; // Main content for Settings
import Sports from "./pages/Sports"; // Main content for Sports
import "./index.css"

function App() {
  return (
    <div className="flex h-screen ">
      {/* Sidebar (Dashboard) */}
      <Dashboard />

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-100 shadow-lg">
        {/* Nested Routes will be rendered here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
