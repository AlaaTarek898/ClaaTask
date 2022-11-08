import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import AllClasses from "./pages/Class";
import Navbart from "./components/Shared/Navbart";
// import Sidemenu from "./components/Sidemenu";
import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Student from "./pages/student";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Calender from "./components/Calender"
import Home from "./components/Home/Home";

import DashBoard from "./pages/Home";
import Navigationbar from "./components/Home/Navigationbar";
import { useState } from "react";
import Sidemenu from "./components/Shared/Sidemenu/Sidebar";

function App() {


  const [role, setRole] = useState("student");

  return (
    <div className="App">
      <Router>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          if (role=== "teacher")
          {
            <>

              <Route path="/dashboard" element={<DashBoard />} />

              <Route path="/Allclasses" element={<AllClasses />} />

            </>
          } else if(role==="student"){
            <>

            <Route path="/student" element={<Student />} />

          </>
          }


          <Route path="/calender" element={<Calender />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
