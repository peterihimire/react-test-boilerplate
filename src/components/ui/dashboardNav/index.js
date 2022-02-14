import React from "react";
import Nav from "./nav";

import  "./styles.scss";

const DashboardNav = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? '_show' : ""} `}>
      <Nav />
    </div>
  );
};

export default DashboardNav;
