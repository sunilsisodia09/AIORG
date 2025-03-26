import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import './Dashboard.css';
import download from "../assets/download.jpg";

const drugs = {
  Atropine: {
    effect: "Dilates the pupil and paralyzes the eye's focusing ability.",
    sideEffect: "Blurred vision, sensitivity to light.",
    baseAccuracy: 85,
    baseSideEffectAccuracy: 30,
    style: { filter: "brightness(1.2) contrast(0.8) saturate(1.1)" },
    zoom: 1.0,
  },
  Pilocarpine: {
    effect: "Constricts the pupil and reduces intraocular pressure.",
    sideEffect: "Headache, reduced night vision.",
    baseAccuracy: 75,
    baseSideEffectAccuracy: 40,
    style: { filter: "brightness(0.8) contrast(1.2) saturate(0.9)" },
    zoom: 0.9,
  },
  Tropicamide: {
    effect: "Temporarily dilates the pupil for eye examinations.",
    sideEffect: "Eye discomfort, blurred vision.",
    baseAccuracy: 90,
    baseSideEffectAccuracy: 25,
    style: { filter: "saturate(1.5) brightness(1.1) contrast(0.9)" },
    zoom: 1.1,
  },
  
};

const EyeDrugEffect = () => {
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [dosage, setDosage] = useState(1); 

  const handleDrugClick = (drugName) => {
    setSelectedDrug(drugs[drugName]);
    setDosage(1); 
  };
  

  const calculatedAccuracy = selectedDrug ? Math.min(100, selectedDrug.baseAccuracy + dosage * 5) : 0;
  const calculatedSideEffectAccuracy = selectedDrug
    ? Math.min(100, selectedDrug.baseSideEffectAccuracy + dosage * 3)
    : 0;
 
  return (

    <div className="eye-drug-effect-container">
      <h1>Eye Drug Effects Simulator</h1>
      <div className="image-frame">
        <img
          src={download}
          alt="Eye Simulation"
          style={{
            ...selectedDrug?.style,
            transform: `scale(${(selectedDrug?.zoom || 1) + dosage * 0.1})`,
            transition: "transform 0.4s ease, filter 0.4s ease",
          }}
        />
      </div>
      <div className="drug-list">
        {Object.keys(drugs).map((drug, index) => (
          <button key={index} onClick={() => handleDrugClick(drug)}>
            {drug}
          </button>
        ))}
      </div>
       
      {selectedDrug && (
        <div className="drug-info">
          <h2>{selectedDrug.effect}</h2>
          <p><strong>Side Effects:</strong> {selectedDrug.sideEffect}</p>

         
          <div className="dosage-container">
            <label>Dosage (mg): </label>
            <input
              type="number"
              min="1"
              max="20"
              value={dosage}
              onChange={(e) => setDosage(Number(e.target.value))}
            />
          </div>
        
    
          <div className="graph-container">
            <h3>Effect vs. Side Effect Accuracy</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={[
                  { name: "Effect", value: calculatedAccuracy },
                  { name: "Side Effect", value: calculatedSideEffectAccuracy },
                ]}
              >

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#007bff" />
              </BarChart>
            </ResponsiveContainer>

          </div>
        </div>
      )}
    </div>
  );
};

export default EyeDrugEffect;
