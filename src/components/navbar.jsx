import { Link } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { reset, logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const links = [
    { name: "Home", link: "/" },
    { name: "Find jobs", link: "/jobs" },
    { name: "Register now", link: "/job-seeker" },
    { name: "Login", link: "/auth/login" },
    { name: "Logout", link: "" },
  ];
  const { user } = useSelector((state) => state.reducer);
  const [isOpen, setIsOpen] = useState(false);
  const filteredLinks = user
    ? links.filter(
        (link) => link.name !== "Register now" && link.name !== "Login"
      )
    : links.filter((link) => link.name !== "Logout");

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className=" shawdow-md w-full fixed top-0 left-0 font-roboto">
      <div className="bg-primary md:flex items-center justify-between py-6 md:py-[.5rem] md:px-10 px-7">
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
          className={`md:flex md:items-center absolute md:static bg-primary md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-15" : "top-[-490px]"
          }`}
        >
          {filteredLinks.map((link) => (
            <li key={link.name} className="my-7 md:ml-8 hover:text-[#dfe6e9]">
              {link.name === "Logout" ? (
                <Link
                  className="text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    onLogout();
                  }}
                >
                  {link.name}
                </Link>
              ) : (
                <Link to={link.link} className="text-lg">
                  {link.name}
                </Link>
              )}
            </li>
          ))}
          {user ? (
            <h3 className="my-7 md:ml-8 font-roboto text-lg text-[#dfe6e9]">
              Welcome {user.first_name}
            </h3>
          ) : (
            <h3 className="hidden "></h3>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
