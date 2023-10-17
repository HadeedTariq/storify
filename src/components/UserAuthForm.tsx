import React from "react";
import Form from "./Form";
import GoogleLogin from "./ui/GoogleLogin";

type Props = {};

const UserAuthForm = (props: Props) => {
  return (
    <form
      action=""
      className="bg-zinc-800 flex flex-col text-white w-[350px] h-fit p-5 rounded-md gap-3">
      <Form />
      <GoogleLogin />
    </form>
  );
};

export default UserAuthForm;
