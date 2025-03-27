import React from "react";
import { Link } from "react-router-dom";
import Organ from './Organ'
import Project from './Project'
import Contact from './Contact'
import heart from '../assets/heart.jpg'
import './Home.css';


const Home = () => {
  return (
    <section className="home">
      <div className="hero-container">
     
        <div className="hero-text">
          <h1>Revolutionizing Drug Discovery with AI</h1>
          <p>
            Unlock the potential of <span className="highlight">Artificial Intelligence</span> 
            in pharmaceutical research. Faster, smarter, and more efficient drug development 
            for a <span className="highlight">healthier future</span>.
          </p>
          <Link to="/about">
            <button className="cta-button">Learn More</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src={heart} alt="AI in Drug Discovery" />
        </div>
      </div>
      <Organ />
      <Project />
      <Contact/>
    </section>
  );
};

export default Home;
