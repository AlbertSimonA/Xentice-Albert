import React from "react";
import Dropdown from "./Dropdown/Dropdown";

import Header from "./Header/Header";
import Navbar from "./Header/Navbar";
import List from "./List/List";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Dropdown />
      <List />
    </>
  );
};

export default AppLayout;
