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
import "react-toastify/dist/ReactToastify.css";
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
    if (email && password) {
      await loginUser({ email, password });
    } else {
      toast.error("please fill up");
    }
  };

  const handleRegister = async () => {
    if (email && password) {
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
  //other check can be done
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
      <div className="flex justify-center m-auto">
        <Headlines type={showRegister} />
      </div>
      <div className="bg-white flex justify-center m-auto my-5 ">
        <SignUpButton type="google" />
        <SignUpButton type="apple" />
      </div>

      <div>
        {showRegister ? ( //SIGN IN
          <div className="relative h-screen">
            <div className="p-2">
              <input
                type="email"
                name="email"
                id="signInUserName"
                className="input w-[100%]  input-bordered max-w-md flex justify-center m-auto"
                value={email}
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
                id="signPass"
                className="input input-bordered w-full max-w-md flex justify-center m-auto"
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
              <button
                className="w-[30%] h-[58px] bg-blue-500 rounded-2xl border text-white text-base border-blue-500"
                onClick={handleLogin}
              >
                Sign In
              </button>
            </div>
            <div className="flex justify-center pb-10">
              <div className="text-center">
                <span className="text-gray-400 text-base font-medium font-['Inter']">
                  Don’t have an account yet?{" "}
                </span>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    setShowRegister(false);
                  }}
                  className="text-blue-500 text-base font-medium font-['Inter'] cursor-pointer"
                >
                  Sign Up
                </span>
              </div>
            </div>
          </div>
        ) : (
          //SIGN up
          <div className="justify-center m-auto h-screen ">
            <div className="w-screem">
              <input
                type="text"
                placeholder="@Email"
                name="email"
                onChange={handleChange}
                id="email"
                value={email}
                className="input w-[100%]  input-bordered max-w-md flex justify-center m-auto"
              />
              {isEmailValid(email) && (
                <p className="mt-2 text-pink-600 text-sm flex justify-center pr-[15%]">
                  Please enter a valid email address..
                </p>
              )}
            </div>

            <div className="p-4">
              <input
                type="text"
                placeholder="@Your Name"
                name="username"
                onChange={handleChange}
                id=""
                value={username}
                className="input input-bordered w-full max-w-md flex justify-center m-auto"
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
                className="input input-bordered w-full max-w-md flex justify-center m-auto"
              />
              <Eye />
            </div>
            <div className="px-4 flex justify-center">
              <input type="checkbox" className="checkbox" disabled checked />
              <div className="pr-10 mr-2 text-gray-500 text-sm pl-2">
                I agree to the Terms & Conditions
              </div>
            </div>

            <br />
            <div className="flex justify-center pb-3">
              <button
                className="w-[30%] h-[58px] bg-blue-500 rounded-2xl border text-white text-base border-blue-500"
                onClick={handleRegister}
              >
                Sign up
              </button>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <span className="text-gray-400 text-base font-medium font-['Inter']">
                  Already have an account?{" "}
                </span>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    setShowRegister(true);
                  }}
                  className="text-blue-500 text-base font-medium font-['Inter'] cursor-pointer"
                >
                  Sign In
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Auth;
