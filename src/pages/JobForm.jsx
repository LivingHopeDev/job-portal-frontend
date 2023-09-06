import { useState } from "react";
import { useSelector } from "react-redux";
import { usePostJobMutation } from "../features/jobApi";
import { toast } from "react-toastify";
const JobForm = () => {
  const { user } = useSelector((state) => state.reducer);
  const [jobData, { isLoading }] = usePostJobMutation();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    email: "",
    address: "",
    salaryRange: "",
    company: "",
    industry: "",
    experience: "",
  });
  const {
    title,
    description,
    email,
    address,
    salaryRange,
    company,
    industry,
    experience,
  } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await jobData(formData);
    if (response.error) {
      toast.error(response.error.data.message);
    } else {
      toast.success(response.data.message);
    }
  };
  return (
    <>
      <div className=" mt-[8rem] flex justify-center font-roboto text-xl">
        {user ? (
          <div className="shadow-md pb-4  h-auto w-[80%] md:w-[40%] ">
            <h1 className="text-center">Add New Job</h1>
            <form
              onSubmit={onSubmit}
              className="mt-2 p-4 flex-col space-y-2 md:flex"
            >
              <label className="mr-2">Job Title: </label>
              <input
                type="text"
                value={title}
                name="title"
                className="border-2 w-[20rem] md:w-full"
                onChange={onChange}
              />
              <label className="mr-2">Description: </label>
              <input
                type="text"
                value={description}
                name="description"
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
              <label className="mr-2">Address</label>
              <input
                type="address"
                value={address}
                name="address"
                className="border-2 w-[20rem] md:w-full"
                onChange={onChange}
              />
              <label className="mr-2">Salary range: </label>
              <input
                type="text"
                name="salaryRange"
                value={salaryRange}
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
          </div>
        ) : (
          <h2>You are not authenticated</h2>
        )}
      </div>
    </>
  );
};

export default JobForm;
