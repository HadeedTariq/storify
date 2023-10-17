import { LoadingButton } from "@mui/lab";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <label>Enter Your Email</label>
      <input type="email" placeholder="Email" />
      <label>Enter Your Password</label>
      <input type="email" placeholder="Password" />
      <LoadingButton
        size="medium"
        fullWidth={true}
        children={"Login"}
        variant="contained"
        color="info"
        loadingPosition="start"
      />
    </>
  );
};

export default Login;
