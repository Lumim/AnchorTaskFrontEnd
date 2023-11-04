import React from "react";
import Logosvg from "../assets/Logosvg";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 h-10">
      <div className="flex-1">
        <a  className="btn btn-ghost normal-case text-xl">
          <Logosvg />
        </a>
      </div>
      <div className="flex-none bg-[F0F5FA]">
        <select className="select select-light bg-[#F0F5FA] w-full max-w-xs text-xl text-[#B0B7C3] rounded-2xl">
          <option disabled selected className="text-current bg-[F0F5FA]">
            English (UK)
          </option>
        </select>
      </div>
    </div>
  );
};

export default NavBar;
