"use client";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  return (
    <button
      className="bg-black text-white font-semibold py-2 px-3 rounded-lg"
      onClick={() => router.push("/sign-in")}>
      SignIn
    </button>
  );
};

export default SignIn;
