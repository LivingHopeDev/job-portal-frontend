import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
const userRegistration = () => {
  return (
    <>
      <Navbar />
      <div className=" mt-[8rem] flex justify-center font-roboto text-xl">
        <div className="shadow-md pb-4 border-2 h-auto w-[80%] md:w-[40%] ">
          <h1 className="text-center">Register</h1>
          <form className="mt-2 p-4 flex-col space-y-2 md:flex">
            <label className="mr-2">First name: </label>
            <input type="text" className="border-2 w-[20rem] md:w-full" />
            <label className="mr-2">Last name: </label>
            <input type="text" className="border-2 w-[20rem] md:w-full" />
            <label className="mr-2">Email: </label>
            <input type="email" className="border-2 w-[20rem] md:w-full" />
            <label className="mr-2">Password: </label>
            <input type="text" className="border-2 w-[20rem] md:w-full" />
            <label className="mr-2">Date of birth: </label>
            <input type="text" className="border-2 w-[20rem] md:w-full" />
            <label className="mr-2">Gender: </label>
            <select type="text" className="border-2 w-[20rem] md:w-full">
              <option value=""></option>

              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label className="mr-2">Nationality: </label>
            <input type="text" className="border-2 w-[20rem] md:w-full" />
            <label className="mr-2">location: </label>
            <input type="text" className="border-2 w-[20rem] md:w-full" />
            <label className="mr-2">Phone: </label>
            <input type="text" className="border-2 w-[20rem] md:w-full" />
            <label className="mr-2">Qualification: </label>
            <input type="text" className="border-2 w-[20rem] md:w-full" />
            <label className="mr-2">Experience: </label>
            <select type="text" className="border-2 w-[20rem] md:w-full">
              <option value=""></option>

              <option value="0-1">0 to 1 year</option>
              <option value="2-4">2 to 4 years</option>
              <option value=">5">5 years and above</option>
            </select>
            <label className="mr-2">Availability: </label>
            <select type="text" className="border-2 w-[20rem] md:w-full">
              <option value=""></option>

              <option value="RemoteFull">Remote and Full time</option>
              <option value="onSiteFull">On site and Full time</option>
              <option value="RemotePart">Remote and part time</option>
              <option value="onSitePart">On site and part time</option>
            </select>
            <input
              type="submit"
              value="Register"
              className="mt-6 outline-none p-2 rounded-xl bg-[#0984e3] text-white hover:bg-white hover:text-[#0984e3]"
            />
          </form>
          <p className="ml-6">
            Want to register as an employer?{" "}
            <Link to={"#"} className="text-[#0984e3]">
              Click me
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default userRegistration;
