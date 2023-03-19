import React from "react";
import { Outlet } from "react-router-dom";
import Alert from "./Alert";
import Navbar from "./Navbar";

const Layout = ({ mode, toggleMode, alert }) => {
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
