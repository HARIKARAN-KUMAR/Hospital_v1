import {
  LayoutDashboard,
  Users,
  UserRound,
  CalendarDays,
  Pill,
  FileText,
  ReceiptIndianRupee,
  LogOut,
  Hospital
} from "lucide-react";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0">

      {/* Logo */}

      <div className="flex items-center gap-3 p-6 border-b border-slate-700">

        <Hospital size={35} className="text-blue-400"/>

        <h1 className="text-xl font-bold">
          Hospital
        </h1>

      </div>

      {/* Menu */}

      <div className="mt-6">

        <ul className="space-y-2 px-3">

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 cursor-pointer">
            <LayoutDashboard size={20}/>
            Dashboard
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 cursor-pointer">
            <Users size={20}/>
            Patients
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 cursor-pointer">
            <UserRound size={20}/>
            Doctors
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 cursor-pointer">
            <CalendarDays size={20}/>
            Appointments
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 cursor-pointer">
            <Pill size={20}/>
            Medicines
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 cursor-pointer">
            <FileText size={20}/>
            Prescriptions
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 cursor-pointer">
            <ReceiptIndianRupee size={20}/>
            Billing
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-500 cursor-pointer mt-10">
            <LogOut size={20}/>
            Logout
          </li>

        </ul>

      </div>

    </div>
  );
}

export default Sidebar;