import React from "react";
import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";

function Layout() {
  return (
    <div>
      <div className="text-3xl text-center text-white font-semibold ">
        <h1>Dynamic Task Management System</h1>
        <h1>By Sarthak</h1>
      </div>
      <AppNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
