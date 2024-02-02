import React from "react";
import LeftSidebar from "./LeftSidebar";
import Content from "./Content";
import RightSidebar from "./RightSidebar";

function HomePage() {
  return (
    < div className="h-screen bg-slate-200 p-10 flex justify-center">
      <LeftSidebar />
      <Content />
      <RightSidebar />
    </div>
  );
}

export default HomePage;
