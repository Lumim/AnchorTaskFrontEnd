import React from "react";
import { useState, useEffect } from "react";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../services/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/authSlice";
import { useAppDispatch } from "../app/hooks";
import NavBar from "../components/NavBar";
import SignUpButton from "../components/SignUpButton";
import Headlines from "../components/Headlines";
import 'react-toastify/dist/ReactToastify.css';
import Eye from "../assets/Eye";


const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  email: "",
  confirmPassword: "",
  roles: [],
};

const Auth = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { firstName, lastName, username, password, confirmPassword, email } =
    formValue;
  const [showRegister, setShowRegister] = useState(Boolean);
  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();
  const [
    registerUser,
    { data: registerData, isSuccess: isRegisterSuccess, error: registerError },
  ] = useRegisterUserMutation();

  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const Navigate = useNavigate();
  const handleLogin = async () => {
    if (username && password) {
      await loginUser({ username, password });
    } else {
      toast.error("please fill up");
    }
  };

  const handleRegister = async () => {
    if (username && password) {
      await registerUser({
        username,
        email,
        password,
        roles: ["moderator", "user"],
      });
    } else {
      toast.error("please fill up");
    }
  };

  const isEmailValid = (email: string) => {
    if (email.length === 0) return true;
    // other checks here
    return false;
  };

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success("user login successfully");
      dispatch(setUser({ token: loginData.token, name: loginData.username }));
      Navigate("/dashboard");
    } else if (isRegisterSuccess) {
      toast.success("user reg successfully");
      //dispatch(setUser({token:loginData.token, name:loginData.username}))
      alert(registerData);
      Navigate("/auth");
    } else {
    }
  }, [isLoginSuccess, isRegisterSuccess]);

  useEffect(() => {
    if (loginError) {
      toast.error((loginError as any).data.message);
    }
    if (registerError) {
      toast.error((registerError as any).data.message);
    }
  });

  return (
    <section>
      <NavBar />
      <div className="bg-white flex justify-center m-auto ">
        <SignUpButton type="google" />
        <SignUpButton type="apple" />
      </div>
      <div className="flex justify-center m-auto">
        <Headlines type={showRegister} />
      </div>
      <div>
        {showRegister ? (
          <div className="relative h-screen">
            <div className="p-2">
              <input
                type="text"
                name="username"
                id=""
                className="input input-bordered w-full max-w-xs flex justify-center m-auto"
                value={username}
                onChange={handleChange}
              />
              {isEmailValid(email) && (
                <p className="mt-2 text-red-600 text-sm flex justify-center pr-20">
                  Please enter a valid email address.
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="password"
                id=""
                className="input input-bordered w-full max-w-xs flex justify-center m-auto"
                onChange={handleChange}
                value={password}
              />
            </div>
            <br />
            <div className="p-4 flex justify-center">
              <input type="checkbox" className="checkbox" disabled checked />
              <div className="pr-10 mr-2 text-gray-500 text-sm pl-2">
                I agree to the Terms & Conditions
              </div>
            </div>
            <div className="flex justify-center">
              <button  className="btn btn-primary rounded-xl w-1/4  text-white" onClick={handleLogin}>Login</button>
            </div>
            <div className="flex justify-center pb-10">
              <div className="text-gray-800"> Already have an account?</div>{" "}
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setShowRegister(false);
                }}
                className="text-blue-900 text-bold pl-2"
              >
                {" "}
                Sign Up
              </a>
            </div>
          </div>
        ) : (
          <div className="justify-center m-auto ">
            <div className="">
              <input
                type="text"
                placeholder="@Email"
                name="username"
                onChange={handleChange}
                id=""
                value={username}
                className="input input-bordered w-full max-w-xs flex justify-center m-auto"
              />
              {isEmailValid(email) && (
                <p className="mt-2 text-pink-600 text-sm flex justify-center pr-20">
                  Please enter a valid email address..
                </p>
              )}
            </div>

            <div className="p-4">
              <input
                type="text"
                placeholder="@Your Name"
                name="email"
                onChange={handleChange}
                id=""
                value={email}
                className="input input-bordered w-full max-w-xs flex justify-center m-auto"
              />
            </div>

            <div className="p-4">
              <input
                type="password"
                placeholder="Create password"
                name="password"
                id=""
                onChange={handleChange}
                value={password}
                className="input input-bordered w-full max-w-xs flex justify-center m-auto"
                
              />
              <Eye/>
            </div>
            <div className="p-4 flex justify-center">
              <input type="checkbox" className="checkbox" disabled checked />
              <div className="pr-10 mr-2 text-gray-500 text-sm pl-2">
                I agree to the Terms & Conditions
              </div>
            </div>

            <br />
            <div className="flex justify-center pb-10">
              <button
                className="btn btn-primary rounded-xl w-1/4  text-white"
                onClick={handleRegister}
              >
                Signup
              </button>
            </div>
            <div className="flex justify-center pb-10">
              <div className="text-gray-800"> Already have an account?</div>{" "}
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setShowRegister(true);
                }}
                className="text-blue-900 text-bold pl-2"
              >
                {" "}
                Sign In
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Auth;
