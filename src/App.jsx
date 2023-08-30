import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import UserRegistration from "./pages/userRegistration";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Header />}></Route>
              <Route
                exact
                path="/job-seeker"
                element={<UserRegistration />}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
