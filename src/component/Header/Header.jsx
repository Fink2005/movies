import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="">
      <div className="container h-20 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-red-600">
          CyberFlix
        </NavLink>
        <div>
          <NavLink
            to="/login"
            className="text-white px-10 py-2 rounded border-2 bg-red-600"
          >
            Login
          </NavLink>

          <button className="bg-white px-10 py-1 rounded border-2 text-red-600 border-red-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
// form antd
