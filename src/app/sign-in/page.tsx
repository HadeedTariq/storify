"use client";
import { signIn } from "next-auth/react";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <button onClick={async () => await signIn("google")}>google</button>
    </div>
  );
};

export default Page;
