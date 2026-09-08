import Sidebar from "../componets/Sidebar";
import Navbar from "../componets/Navbar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 ml-64">

        <Navbar />

        <div className="p-8">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default AdminLayout;