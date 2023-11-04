import React from "react";
import Orimg from "../assets/Or";
interface Props {
  type: Boolean;
}

const Headlines = (props: Props) => {
  return (
    <div className="inline">
      {!props.type ? (
        <div className="flex justify-center m-auto text-gray-700 text-[26px] font-bold font-['Inter']">
          Getting Started
        </div>
      ) : (
        <div className="flex justify-center m-auto text-gray-700 text-[26px] font-bold font-['Inter']">
          Sign In
        </div>
      )}

      {!props.type ? (
        <div className="flex my-2 justify-center m-auto text-gray-400 text-lg font-medium font-['Inter']">
          Create an account to continue!
        </div>
      ) : (
        <div className="flex my-2 justify-center m-auto text-gray-400 text-lg font-medium font-['Inter']">

          Welcome back, you’ve been missed!
        </div>
      )}

      <div className="flex justify-center m-auto">
        <Orimg />
      </div>
    </div>
  );
};

export default Headlines;
