import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      {" "}
      {/* <header style={{ backgroundColor: "red", padding: "1rem" }}>
        <p>Header</p>
      </header> */}
      <div className="flex">{children}</div>
    </div>
  );
};

export default AuthLayout;
