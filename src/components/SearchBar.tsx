import { AiOutlineSearch } from "react-icons/ai";
type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="flex justify-between items-center bg-slate-100 rounded-sm p-1">
      <input
        type="text"
        className=" outline-none border-none p-1 bg-transparent"
        placeholder="Search here"
      />
      <AiOutlineSearch />
    </div>
  );
};

export default SearchBar;
