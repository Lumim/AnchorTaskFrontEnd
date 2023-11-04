import React from "react";
import Logosvg from "../assets/Logosvg";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100 h-10">
      <div className="flex-1">
        <a  className="btn btn-ghost normal-case text-xl cursor-pointer" onClick={()=>{navigate('/auth')}}>
          <Logosvg />
        </a>
      </div>
      <div className="flex-none bg-[F0F5FA] pr-10">
        <select className="select select-light bg-[#F0F5FA] w-full max-w-xs text-xl text-gray-400 rounded-2xl">
          <option disabled selected={true} className="text-current bg-[F0F5FA]">
            English (UK)
          </option>
        </select>
      </div>
    </div>
  );
};

export default NavBar;
