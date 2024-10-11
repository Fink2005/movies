import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  // hook duoc dung de lay data tu store ve useSelector
  let user = useSelector((state) => state.userSlice.dataLogin);
  console.log(user);

  // 1 xoa localStorage
  // 2 da ra trang main
  let handleLogout = () => {
    localStorage.removeItem("USER_LOGIN");
    window.location.href = "/login";
  };
  let renderMenu = () => {
    if (user) {
      return (
        <>
          <strong>{user.hoTen}</strong>

          <button
            onClick={handleLogout}
            className="bg-white px-10 py-1 rounded border-2 text-red-600 border-red-600"
          >
            Logout
          </button>
        </>
      );
    } else {
      return (
        <div>
          <NavLink
            to="/login"
            className="text-white px-10 py-2 rounded border-2 bg-red-600"
          >
            Login
          </NavLink>
        </div>
      );
    }
  };
  return (
    <div className="">
      <div className="container h-20 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-red-600">
          CyberFlix
        </NavLink>
        <div>{renderMenu()}</div>
      </div>
    </div>
  );
}
// form antd
