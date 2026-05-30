import React from "react";
import ContentContainer from "./ContentContainer";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white">
      <ContentContainer>{children}</ContentContainer>{" "}
    </div>
  );
};

export default MainContainer;
