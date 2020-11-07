import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <a className="active" href="posdashboard.html">
          ISSUE TYPE
        </a>
        <a href="actions.html">Add Conntact</a>
        <a href="status.html">Message</a>
        <a href="history.html">Logout</a>
      </div>
    </div>
  );
};
export default Sidebar;
