// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard"; // Sidebar
import Home from "./pages/Home"; // Main content for Home
import Settings from "./pages/Settings"; // Main content for Settings
import Sports from "./pages/Sports"; // Main content for Sports
import Teams from "./pages/Teams";
import "./index.css"
import Matches from "./pages/Matches";
import Players from "./pages/Players";
import Standings from "./pages/Standings";
import Stats from "./pages/Stats";

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
          <Route path="/teams" element={<Teams />} />
          <Route path="/matches" element={<Matches />} /> 
          <Route path="/players" element={<Players />} /> 
          <Route path="/standings" element={<Standings />} /> 
          <Route path="/stats" element={<Stats />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
