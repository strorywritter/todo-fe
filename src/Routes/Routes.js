import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
// import MainLayout from "../Layout/MainLayout";
// import Home from "../pages/Home";
// import User from "../pages/User";
import Home from "../pages/home";
import Register from "../pages/Register";
// import SingleNews from "../pages/SingleNews";
// import Categories from "../pages/Categories";
// import CategoryNews from "../pages/CategoryNews"
// import AddNews from "../pages/AddNews";
// import AddCategories from "../pages/AddCategories";
// import AdminDashborad from "../pages/AdminDashborad";
// import ChangeUserRole from "../pages/ChangeUserRole";

const PageRoutes = () => (
  <Router>
    <Routes>
      {/* <Route path="/" exact element={<Register />} /> */}
      <Route path="/home" exact element={<Home />} />
      {/* <Route path="/profile" exact element={<Profile/>} />
      <Route path="/singleNews/:id" element={<SingleNews/>} />
      <Route path="/categories" exact element={<Categories/>} />
      <Route path="/categories/:id" element={<CategoryNews/>} />
      <Route path="/addnews" element={<AddNews/>} />
      <Route path="/addcategories" element={<AddCategories/>} />
      <Route path="/changeuserrole" element={<ChangeUserRole/>} />
      <Route path="/admin" element={<AdminDashborad/>} /> */}
    </Routes>
  </Router>
);

export default PageRoutes;
