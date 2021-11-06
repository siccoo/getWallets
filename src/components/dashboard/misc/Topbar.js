import React from "react";
import logo from "../../../assets/images/GetWalletsLogo.svg";
export default function Topbar(props) {
  return (
    <>
      <div className="i-dashboard-nav">
        <div className="i-dashboard-brand">
          <img src={logo} loading="lazy" width="150" alt="" />
        </div>
      </div>
    </>
  );
}