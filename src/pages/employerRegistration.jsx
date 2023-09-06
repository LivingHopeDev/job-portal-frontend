import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { reset, register } from "../features/authSlice";

const EmployerRegistration = () => {
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
    position_in_company: "",
    number_of_employees: "",
    type_of_employer: "",
    website: "",
    industry: "",
    phone: "",
    company: "",
  });
  const {
    first_name,
    last_name,
    email,
    password,
    position_in_company,
    number_of_employees,
    type_of_employer,
    website,
    industry,
    phone,
    company,
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
        <div className="shadow-md pb-4 h-auto w-[80%] md:w-[40%] ">
          <h1 className="text-center">Register as an Employer</h1>
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
            <label className="mr-2">Position in company: </label>
            <input
              type="text"
              name="position_in_company"
              value={position_in_company}
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            />
            <label className="mr-2">Company: </label>
            <input
              type="text"
              name="company"
              value={company}
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            />
            <label className="mr-2">Industry: </label>
            <input
              type="text"
              name="industry"
              value={industry}
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            />
            <label className="mr-2">Number of employees: </label>
            <input
              type="text"
              name="number_of_employees"
              value={number_of_employees}
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
            <label className="mr-2">website: </label>
            <input
              type="text"
              name="website"
              value={website}
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            />
            <label className="mr-2">Type of employer: </label>
            <select
              type="text"
              name="type_of_employer"
              value={type_of_employer}
              className="border-2 w-[20rem] md:w-full"
              onChange={onChange}
            >
              <option value=""></option>

              <option value="direct employer">Direct employer</option>
              <option value="agency">Agency</option>
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
            Want to register as a job seeker?&nbsp;
            <Link to={"/job-seeker"} className="text-primary">
              Click me
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default EmployerRegistration;
