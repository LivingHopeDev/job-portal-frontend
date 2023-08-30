import Navbar from "../components/navbar";

const Header = () => {
  return (
    <header className="  bg-[#dfe6e9] bg-cover bg-no-repeat h-screen p-4 text-back">
      <Navbar />
      <div className="mt-[11rem] flex justify-center">
        <h1 className="text-black text-center font-roboto text-[2rem] md:text-[4rem]">
          Get The <span className="text-[#0984e3]">Right Job</span> <br></br>{" "}
          You Deserve
        </h1>
      </div>
    </header>
  );
};

// image https://www.freepik.com/author/rawpixel-com

export default Header;
