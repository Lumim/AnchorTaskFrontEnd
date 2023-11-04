import React from "react";
import Logosvg from "../../assets/Logosvg";
import UserLogo from "../../assets/UserLogo";
import Invoice from "../../assets/Invoice"
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="block border-r-2 h-screen z-10">
      <div className="inline-block   border-r-2">
        <a className="m-auto flex justify-center"  onClick={()=>{navigate('/dashboard')}}><Logosvg/></a>
       
        <ul className="menu pt-4 px-4 w-60 h-screen bg-white ">
        <a href="" className="p-3 text-gray-400 text-xs font-medium font-['Inter'] tracking-wide">PAGES</a>
          <li className="bg-slate-100 rounded-xl gap-3 px-2"> 
            <a className="gap-2 flex " onClick={()=>{navigate('/dashboard/sales')}}><Invoice/> <div className= "pl-10 text-gray-400 text-sm font-medium font-['Inter']">Sales</div></a>
          </li>
          <li  className="bg-slate-100 rounded-xl gap-3 px-2 my-3">
         <a className="gap-2 flex " onClick={()=>{navigate('/dashboard/Users')}}> <UserLogo/> <div className= "pl-10 text-gray-400 text-sm font-medium font-['Inter']">Users</div></a>

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
