import { MetaBlogIcon } from "./MetaBlogIcon";
import { SearchIcon } from "./SearchIcon";

export const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center w-full h-auto">
      <div className="container flex justify-center">
        <MetaBlogIcon />

        <div className="flex w-full h-auto justify-center gap-10">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className=" flex justify-center border items-center rounded-[12px] py-[8px] pl-[16px] pr-[8px] bg-[#F4F4F5]">
          <input type="text" placeholder="Search" className="bg-[#F4F4F5]" />
          <SearchIcon />
        </div>
      </div>
    </header>
  );
};
