import React, { useState } from "react";
import axios from "axios";
import "./Contact.css"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
  
    try {
      const res = await axios.post("http://localhost:5000/contact", formData);
      setStatus(res.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Error sending message. Please try again.");
    }
  };
  

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
