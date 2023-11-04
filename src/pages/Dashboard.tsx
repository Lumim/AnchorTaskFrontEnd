import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectAuth } from "../features/authSlice";
import { logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import DataTable from "../components/dashboard/DataTable";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Users from "./userPage/Users";
import Sales from "./userPage/Sales"

import { ToastContainer } from 'react-toastify';
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
    <div className="h-screen gap-1">
      <div className="flex h-10">
        <Sidebar />
        <Header />
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
