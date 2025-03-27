import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage, ForgotPassword } from "./Components/Loginpage";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/MyNavbar";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import About from './Pages/About'
import Service from './Pages/Service'



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Service" element={<Service/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
