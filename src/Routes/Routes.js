import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "../pages/home";


const PageRoutes = () => (
  <Router>
    <Routes>
      <Route path="/home" exact element={<Home />} />
    </Routes>
  </Router>
);

export default PageRoutes;
