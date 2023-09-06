import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../features/authSlice";
const UserRegistration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.reducer
  );
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    nationality: "",
    qualification: "",
    experience: "",
    phone: "",
    location: "",
    availability: "",
  });
  const {
    first_name,
    last_name,
    email,
    password,
    dob,
    gender,
    nationality,
    qualification,
    experience,
    phone,
    location,
    availability,
  } = formData;
  useEffect(() => {
    if (isSuccess || user) {
      navigate("/auth/login");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <>
      <div className=" mt-[8rem] flex justify-center font-roboto text-xl">
        <div className="shadow-md pb-4  h-auto w-[80%] md:w-[40%] ">
          <h1 className="text-center">Register as a job seeker</h1>
          <form
            onSubmit={onSubmit}
            className="mt-2 p-4 flex-col space-y-2 md:flex"
          >
            <label className="mr-2">First name: </label>
            <input
              type="text"
              value={first_name}
              name="first_name"
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            />
            <label className="mr-2">Last name: </label>
            <input
              type="text"
              value={last_name}
              name="last_name"
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            />
            <label className="mr-2">Email: </label>
            <input
              type="email"
              value={email}
              name="email"
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            />
            <label className="mr-2">Password: </label>
            <input
              type="password"
              value={password}
              name="password"
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            />
            <label className="mr-2">Date of birth: </label>
            <input
              type="text"
              name="dob"
              value={dob}
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            />
            <label className="mr-2">Gender: </label>
            <select
              type="text"
              name="gender"
              value={gender}
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            >
              <option value=""></option>

              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label className="mr-2">Nationality: </label>
            <input
              type="text"
              name="nationality"
              value={nationality}
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            />
            <label className="mr-2">location: </label>
            <input
              type="text"
              name="location"
              value={location}
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            />
            <label className="mr-2">Phone: </label>
            <input
              type="text"
              name="phone"
              value={phone}
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            />
            <label className="mr-2">Qualification: </label>
            <input
              type="text"
              name="qualification"
              value={qualification}
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            />
            <label className="mr-2">Experience: </label>
            <select
              type="text"
              name="experience"
              value={experience}
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            >
              <option value=""></option>

              <option value="0-1">0 to 1 year</option>
              <option value="2-4">2 to 4 years</option>
              <option value=">5">5 years and above</option>
            </select>
            <label className="mr-2">Availability: </label>
            <select
              type="text"
              name="availability"
              value={availability}
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            >
              <option value=""></option>

              <option value="RemoteFull">Remote and Full time</option>
              <option value="onSiteFull">On site and Full time</option>
              <option value="RemotePart">Remote and part time</option>
              <option value="onSitePart">On site and part time</option>
            </select>
            {isLoading ? (
              <input
                type="submit"
                value="Loading..."
                className="mt-6 outline-none p-2 rounded-xl bg-primary "
              />
            ) : (
              <input
                type="submit"
                value="Register"
                className="mt-6 outline-none p-2 rounded-xl bg-primary text-white hover:bg-[#0871c2]"
              />
            )}
          </form>
          <p className="ml-6">
            Want to register as an employer?&nbsp;
            <Link to={"/employer"} className="text-[#0984e3]">
              Click me
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserRegistration;
