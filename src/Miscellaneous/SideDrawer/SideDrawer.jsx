import React from "react";
import "./SideDrawer.scss";

const SideDrawer = () => {
  return (
    <>
      <div className="sideMenu">
        <div className="image">
          <img src="assets/pic.jpg" alt="pic" />
          <h2>Samora</h2>
        </div>
        <div className="links">
          <div className="icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="icon">
            <i class="fa-solid fa-user"></i>
          </div>
          <div className="icon">
            <i class="fa-solid fa-gear"></i>
          </div>
          <div className="icon">
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>
          <div className="logo">
            <h2>ChatYee</h2>
            <span>&copy; 2023</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
