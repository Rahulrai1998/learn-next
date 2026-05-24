import { Metadata } from "next";
import React from "react";

//config based metadata, next js will automatically detects it and turns it into relevant meta tags. this is static metadata.
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Layout",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p className="p-1.5">Dashboard Layout</p> <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
