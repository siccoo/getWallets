import React from "react";
import { Link } from "react-router-dom";
import { removeState } from "../../../utils/logOut";
import { useHistory } from "react-router";

export default function Sidebar() {
  const history = useHistory();
  function handleLogout() {
    removeState();
    history.push("/");
  }

  return (
    <>
      <div className="i-dashboard-sidebar">
        <div className="i-power-sidebar-div">
          <div className="i-poer-sidebar-div-header">
            Powerdeal ID <span className="id-span">1234567</span>
          </div>
          <div className="sidebar-div-row">
            <div className="sidebar-div-col">
              <div className="sidebar-div-col-header">Total Balance</div>
              <div className="sidebar-div-col-value">N20,000</div>
            </div>
            <div className="sidebar-div-col">
              <div className="sidebar-div-col-header">Points</div>
              <div className="sidebar-div-col-value">N0.0</div>
            </div>
          </div>
        </div>
        <div className="i-power-sidebar-nav">
          <Link
            to="/dashboard/overview"
            className="i-power-list-row link-active"
          >
            <div className="i-power-list-col-text">OVERVIEW</div>
          </Link>
          <Link to="/dashboard/transaction" className="i-power-list-row ">
            <div className="i-power-list-col-text">WALLETS</div>
          </Link>
          <a href="/" className="i-power-list-row ">
            <div className="i-power-list-col-text">TRANSACTION</div>
          </a>
          <div onClick={handleLogout} className="i-power-list-row ">
            <div className="i-power-list-col-text">LOGOUT</div>
          </div>
        </div>
      </div>
    </>
  );
}
