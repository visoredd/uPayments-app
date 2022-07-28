import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="py-4 px-6 mt-5 rounded bg-white  m-auto flex justify-between shadow-md">
      <div
        className="italic font-semibold text-lg cursor-pointer"
        onClick={() => navigate("/")}
      >
        UPayments Store
      </div>
      <div className="italic font-bold text-lg cursor-pointer">Register</div>
    </div>
  );
}

export default Header;
