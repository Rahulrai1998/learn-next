import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {" "}
      <p className="p-1.5">Dashboard Layout</p> <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;