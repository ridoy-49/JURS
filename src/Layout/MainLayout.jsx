import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
  return (
    <div className="max-w-[1600px]  mx-auto ">
      <Navbar />
      <div  >
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
