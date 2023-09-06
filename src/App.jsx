import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import UserRegistration from "./pages/UserRegistration";
import EmployerRegistration from "./pages/EmployerRegistration";
import Login from "./pages/Login";
import JobList from "./pages/JobList";
import NotFound from "./pages/NotFound";
import JobForm from "./pages/JobForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Header />}></Route>
          <Route
            exact
            path="/job-seeker"
            element={<UserRegistration />}
          ></Route>
          <Route
            exact
            path="/employer"
            element={<EmployerRegistration />}
          ></Route>
          <Route exact path="/auth/login" element={<Login />}></Route>
          <Route exact path="/jobs" element={<JobList />}></Route>
          <Route exact path="/post-job" element={<JobForm />}></Route>

          <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
