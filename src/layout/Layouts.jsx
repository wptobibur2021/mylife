import React from "react";
import Header from "../components/frontend/common/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/frontend/common/footer/Footer";

const Layouts = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
