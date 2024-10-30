import { Outlet, Link } from "react-router-dom";
import SideBar from "../src/components/Sidebar";

const Layout = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;