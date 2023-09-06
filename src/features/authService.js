import axios from "axios";

const ROOT_URL = "https://job-portal-1g74.onrender.com/api/user";

const register = async (userData) => {
  let api_url = `${ROOT_URL}`;
  const response = await axios.post(api_url, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  let api_url = `${ROOT_URL}/login`;
  const response = await axios.post(api_url, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
