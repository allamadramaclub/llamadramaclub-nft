import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import WelcomePage from "./WelcomePage";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<App />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
