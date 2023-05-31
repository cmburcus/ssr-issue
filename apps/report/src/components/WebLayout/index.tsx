import React from "react";

interface WebLayoutProps {
  children: React.ReactNode;
}

const WebLayout = ({ children }: WebLayoutProps) => (
  <div>{children}</div>
);

export default WebLayout;
