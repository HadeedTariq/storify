"use client";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { LoadingButton } from "@mui/lab";
import { RiGoogleFill } from "react-icons/ri";

const GoogleLogin = () => {
  const { isLoading, mutate } = useMutation({
    mutationFn: async () => {
      await signIn("google");
    },
  });
  return (
    <LoadingButton
      onClick={() => mutate()}
      loading={isLoading}
      size="medium"
      fullWidth={true}
      children={"Google"}
      variant="contained"
      color="info"
      startIcon={<RiGoogleFill />}
      loadingPosition="start"
    />
  );
};

export default GoogleLogin;
