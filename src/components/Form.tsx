"use client";
import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const Form = () => {
  const [auth, setAuth] = useState<boolean>(false);
  return (
    <>
      {auth ? (
        <>
          <Login />
          <h3 className="text-base font-semibold text-center gap-2">
            Don't Have An Account{" "}
            <span
              className="text-red-400 font-bold cursor-pointer underline "
              onClick={() => setAuth(false)}>
              SignUp
            </span>
          </h3>
        </>
      ) : (
        <>
          <SignUp />
          <h3 className="text-base font-semibold text-center gap-2">
            Already Have An Account{" "}
            <span
              className="text-red-400 font-bold cursor-pointer underline "
              onClick={() => setAuth(true)}>
              Login
            </span>
          </h3>
        </>
      )}
    </>
  );
};

export default Form;
