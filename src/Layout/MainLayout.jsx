import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
  return (
    <div className="max-w-[1600px]  mx-auto ">
      <div className="h-6 bg-blue-500 sticky top-0">
        <p className="text-center">Upcoming Events</p>
      </div>
      <Navbar />
      <div  >
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
