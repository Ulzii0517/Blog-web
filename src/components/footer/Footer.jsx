export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center pt-[64px] px-[352px] gap-[25px] ">
      <div className="flex container max-w-[1215px] h-auto gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-[18px] font-semibold font-sans">About</p>
          <p className="text-[16px] font-normal font-sans max-w-[280px] text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className=" flex flex-col text-[16px] font-normal font-sans text-[#181A2A] gap-1">
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-[80px] max-w-[521px]">
          <div className="text-[16px] font-normal font-sans text-[#3B3C4A]">
            <p>Home</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>
        <div className=""></div>
      </div>
    </footer>
  );
};
