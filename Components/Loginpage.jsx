import React, { useState } from "react";
import "./Loginpage.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrPhone, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token);

        setEmailOrPhone("");
        setPassword("");

        navigate("/dashboard");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email or Phone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, gender, dob, password }),
      });

      const data = await response.json();
      alert(data.message);

      if (response.ok) {
        setName("");
        setEmail("");
        setPhone("");
        setGender("");
        setDob("");
        setPassword("");

        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

const ForgotPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleSendOTP = async () => {
    try {
      const response = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrPhone }),
      });

      const data = await response.json();
      alert(data.message);

      if (response.ok) {
        setOtpSent(true);
      }
    } catch (error) {
      console.error("Forgot Password error:", error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrPhone, otp }),
      });

      const data = await response.json();
      alert(data.message);

      if (response.ok) {
        setVerified(true);
      }
    } catch (error) {
      console.error("OTP Verification error:", error);
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await fetch("http://localhost:5000/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrPhone, newPassword }),
      });

      const data = await response.json();
      alert(data.message);

      if (response.ok) {
        setEmailOrPhone("");
        setOtp("");
        setNewPassword("");
        setOtpSent(false);
        setVerified(false);
      }
    } catch (error) {
      console.error("Password Reset error:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Forgot Password</h2>
        {!otpSent ? (
          <>
            <input
              type="text"
              placeholder="Enter Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
            <button onClick={handleSendOTP}>Send OTP</button>
          </>
        ) : !verified ? (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOTP}>Verify OTP</button>
          </>
        ) : (
          <>
            <input
              type="password"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleResetPassword}>Reset Password</button>
          </>
        )}
        <p>
          Remembered your password? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export { LoginPage, RegisterPage, ForgotPassword };
