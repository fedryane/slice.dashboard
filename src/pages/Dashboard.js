import React from "react";
import { Charts, Header, Lastest, MainSection, Sidebar, Upcoming } from "../components";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="nav">
          <Header />
          <MainSection />
          <div className="mt-14">
            <hr />
          </div>
          <Charts />
          <div className="mt-5">
            <hr />
          </div>
          <div className="flex flex-row">
            <Lastest />
            <Upcoming />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
