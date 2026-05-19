import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      {" "}
      <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
        <p>Header</p>
      </header>
      <div>{children}</div>
      <footer
        className="block"
        style={{
          backgroundColor: "ghostwhite",
          padding: "1rem",
        }}
      >
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default RootLayout;
