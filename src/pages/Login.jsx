import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/authSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
const Login = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.reducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields must be filled");
      return false;
    }

    dispatch(login(formData));
  };

  return (
    <>
      <div className=" mt-[12rem] flex justify-center font-roboto text-xl">
        <div className="shadow-md pb-4 border-2 h-auto w-[80%] md:w-[40%] ">
          <h1 className="text-center">Register</h1>
          <form
            onSubmit={onSubmit}
            className="mt-2 p-4 flex-col space-y-2 md:flex"
          >
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
            {isLoading ? (
              <button className="mt-6 outline-none p-2 rounded-xl bg-[#0984e3]">
                Loading...
              </button>
            ) : (
              <button className="mt-6 outline-none p-2 rounded-xl bg-primary text-white  hover:bg-[#0871c2]">
                Login
              </button>
            )}
          </form>
          <p className="ml-6">
            Yet to register? &nbsp;
            <Link to={"/job-seeker"} className="text-[#0984e3]">
              Click me
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
