import React from "react";
import Navbar from "../ui/Navbar";

const Dashboard = ({ user }) => {
  return (
    <div>
      <Navbar title="d-vops" user={user} />
    </div>
  );
};

export default Dashboard;
