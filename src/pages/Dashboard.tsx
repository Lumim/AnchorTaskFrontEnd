import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectAuth } from "../features/authSlice";
import { logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import DataTable from "../components/dashboard/DataTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Users from "./userPage/Users";
import Sales from "./userPage/Sales";

import { ToastContainer } from "react-toastify";
import UserDashboard from "./userPage/UserDashboard";

const Dashboard = () => {
  const {} = useAppSelector(selectAuth);
  const Navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("logout success");
    Navigate("/auth");
  };

  return (
    <div>
      <div className=" flex">
        <div className=" block h-10 ">
          <Sidebar />
        </div>
        <div className="h-1/3  block">
          <Header task={handleLogout} />
        </div>
      </div>

      <div className="ml-[22%] mt-10 block h-screen justify-center">
        welcome to dashboard!!
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <button onClick={()=>handleLogout()}>
    Logout
    </button> */
}
