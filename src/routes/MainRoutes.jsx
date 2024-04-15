import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import About from "../components/About/About";
import Portfolio from "../components/Porfolio/Portfolio";
import Resources from "../components/Resources/Resources";
import NonFound from "../components/NonFound/NonFound";
import Home from "../components/Home/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/Resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route index element={<Home/>} />
        <Route path="*" element={<NonFound />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;