import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-details">
       
          <p>
            Welcome to [Your Organization Name]. We are dedicated to providing high-quality services in [mention your field/industry].
            Our team of experts works relentlessly to ensure that our customers receive the best possible experience. 
            We strive to maintain excellence, innovation, and trust at the core of everything we do.
          </p>
        </div>

        <div className="mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower individuals and organizations by delivering innovative solutions and exceptional services
              that exceed expectations. We are committed to fostering growth and creating positive change in the communities we serve.
            </p>
          </div>

          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              We envision a future where [your organization/industry] continues to evolve, driven by technological advancement,
              sustainability, and a focus on enriching lives. Our vision is to lead the way and inspire others to pursue excellence and
              innovation in everything they do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
