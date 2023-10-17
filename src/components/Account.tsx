import React from "react";
import Image from "next/image";

type Props = {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Account = ({ user }: Props) => {
  return (
    <div>
      <Image
        width={40}
        height={40}
        className="rounded-full cursor-pointer"
        alt="logo"
        src={user.image as string}
      />
    </div>
  );
};

export default Account;
