import React, { useState } from "react";
import emoji from "../../assets/images/emoji.jpg";
import Topbar from "../../components/dashboard/misc/Topbar";
import Sidebar from "../../components/dashboard/misc/Sidebar";
// import Form from "../../components/Dashboard/Overview/Form";
// import Summary from "../../components/Dashboard/Overview/Summary";

// Styles
import "../../assets/styles/Dashboard.scss"

const Dashboard = () => {
  const [showForm, setShowForm] = useState(true);
  const [showSummary, setShowSummary] = useState(false);

  const switchToForm = () => {
    setShowForm(true);
    setShowSummary(false);
  };

  const switchToSummary = () => {
    setShowForm(false);
    setShowSummary(true);
  };

  return (
    <div className="page-control">
      <Topbar />
      <div className="dashboard-row">
        <Sidebar />
        <div className="dashboard-content">
          {showSummary ? (
            <div onClick={switchToForm} className="i-power-back">
              Back
            </div>
          ) : null}

          <div className="content-heading">
            <div className="content-heading-col-1">
              <img src={emoji} loading="lazy" alt="" />
            </div>
            <div className="content-heading-col-2">
              <div className="heading-col-2-header">
                <span className="heading-col-2-span">Hi Nkem,</span> get your
                electricity token quickly
              </div>
              {/* <div className="heading-col-text"></div> */}
            </div>
          </div>
          <div className="i-power-sidebar-div mobile">
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
          {/* {showForm ? <Form switchToSummary={switchToSummary} /> : null} */}

          {/* {showSummary ? <Summary /> : null} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

