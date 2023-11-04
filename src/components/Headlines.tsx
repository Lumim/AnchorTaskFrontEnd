import React from "react";
import Orimg from "../assets/Or";
interface Props {
  type: Boolean;
}

const Headlines = (props: Props) => {
  return (
    <div className="inline">
      {!props.type ? (
        <div className="flex justify-center m-auto text-bold text-4xl">
          Getting Started
        </div>
      ) : (
        <div className="flex justify-center m-auto text-bold text-4xl">
          Sign In
        </div>
      )}

      {!props.type ? (
        <div className="flex justify-center m-auto">
          Create an account to continue!
        </div>
      ) : (
        <div className="flex justify-center m-auto">
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
