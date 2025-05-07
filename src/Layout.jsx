import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
