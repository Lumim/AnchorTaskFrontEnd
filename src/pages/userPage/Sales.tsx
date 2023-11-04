import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/authSlice";
import { toast } from "react-toastify";
import DataTable from "../../components/DataTable";

const Sales = () => {
  const Navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("logout success");
    Navigate("/auth");
  };

  return (
    <div className="h-[100%]">
      <div className=" flex">
        <div className=" block h-10 ">
          <Sidebar />
        </div>
        <div className="h-1/3  block">
          <Header task={handleLogout} />
        </div>
      </div>
      <div className="ml-[22%] block h-screen">
        <DataTable title="sales" />
      </div>
    </div>
  );
};
export default Sales;
