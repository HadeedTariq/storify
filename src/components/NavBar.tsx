import { Typography } from "@mui/material";
import { getAuthSession } from "@/utils/authOptions";
import SearchBar from "./SearchBar";
import Account from "./Account";
import SignIn from "./ui/SignIn";

type Props = {};

const NavBar = async (props: Props) => {
  const session = await getAuthSession();
  return (
    <div>
      <nav className="flex justify-between items-center w-full bg-[#f2fdfd] py-1 px-2 text-black">
        <Typography variant="h5" fontFamily={"sans-serif"} fontWeight={"bold"}>
          Storify
        </Typography>
        <SearchBar />
        {session?.user ? <Account user={session?.user} /> : <SignIn />}
      </nav>
    </div>
  );
};

export default NavBar;
