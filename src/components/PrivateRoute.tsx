import React, { ReactNode } from "react";

import { Navigate } from "react-router-dom";

function getUserInfo() {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    return JSON.parse(userInfo);
  }
  return null;
}

const user = getUserInfo();

interface Props {
  children: ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  return <>{!user ? <Navigate replace to={"/"} /> : children}</>;
};

export default PrivateRoute;
