import { Props } from "framer-motion/types/types";
import React from "react";
import NavBar from "./NavBar";

const Layout = (props: Props) => {
  return (
    <main>
      <NavBar />
      Layout is working
      {props.children}
    </main>
  );
};

export default Layout;
