import { Link } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";

import { useState } from "react";

const Navbar = () => {
  const links = [
    { name: "Home", link: "#" },
    { name: "Find jobs", link: "#" },
    { name: "Register now", link: "#" },
    { name: "Log in", link: "#" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" shawdow-md w-full fixed top-0 left-0 font-roboto">
      <div className="bg-[#0984e3] md:flex items-center justify-between py-6 md:py-[.5rem] md:px-10 px-7">
        <div className="text-xl">
          <Link to={""}>Logo</Link>
        </div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="absolute right-6 top-4 md:hidden"
        >
          {isOpen ? <FaXmark size={25} /> : <FaBars size={25} />}
        </div>
        <ul
          className={`md:flex md:items-center absolute md:static bg-[#0984e3] md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-15" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="my-7 md:ml-8 hover:text-[#dfe6e9]">
              <Link to={link.link} className="text-lg">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
