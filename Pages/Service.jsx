import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <section className="services">
      <div className="services-container">
        <p className="services-intro">
          Unlock the potential of Artificial Intelligence in pharmaceutical research. 
          Faster, smarter, and more efficient drug development for a healthier future.
        </p>

        <div className="services-list">
          <div className="service-card">
            <h2>AI-Powered Drug Discovery</h2>
            <p>
              Leveraging machine learning and deep learning to identify promising drug candidates 
              with higher precision and reduced timelines.
            </p>
          </div>

          <div className="service-card">
            <h2>Predictive Analytics for Clinical Trials</h2>
            <p>
              AI-driven analytics to optimize clinical trial design, patient selection, and outcome predictions, 
              ensuring cost-effectiveness and efficiency.
            </p>
          </div>

          <div className="service-card">
            <h2>Automated Data Processing</h2>
            <p>
              Advanced AI algorithms process vast amounts of biomedical and genomic data, 
              accelerating insights and decision-making in drug research.
            </p>
          </div>

          <div className="service-card">
            <h2>AI-Assisted Drug Repurposing</h2>
            <p>
              Utilizing AI to identify new therapeutic uses for existing drugs, 
              reducing R&D costs and bringing treatments to market faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
