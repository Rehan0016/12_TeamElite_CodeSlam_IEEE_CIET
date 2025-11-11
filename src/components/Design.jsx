import React from "react";
import partImg from "../assets/part-1.png";

export default function Engineering() {
  return (
    <div className="section engineering">
      <div className="container split">
        <div className="left reveal">
          <img src={partImg} alt="part" className="part-art" />
        </div>
        <div className="right reveal">
          <h2 className="section-title">ENGINEERING</h2>
          <p className="section-desc">
            Solid assembly | Reverse engineering | Reliability testing — end-to-end engineering services.
          </p>
          <ul className="meta-list">
            <li>Solid Assembly</li>
            <li>Reverse Engineering</li>
            <li>Testing & Validation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}