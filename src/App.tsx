import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/inject-style";
import { useAppDispatch } from "./app/hooks";
import { setUser } from "./features/authSlice";
import { PrivateRoute } from "./components/PrivateRoute";
import Sales from "./pages/userPage/Sales";
import Users from "./pages/userPage/Users";

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <div className="App" data-theme="light">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Navigate to="/auth" replace />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/sales"
            element={
              <PrivateRoute>
                <Sales />

              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/users"
            element={
              <PrivateRoute>
                <Users />

              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
