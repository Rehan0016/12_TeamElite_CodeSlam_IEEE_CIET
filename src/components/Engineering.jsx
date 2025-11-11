import React from "react";
import partImg from "../assets/engineering.png";

export default function Engineering() {
  return (
    <div style={{ background: "red", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", gap: "50px", color: "#fff" }}>
      <img src={partImg} alt="Engineering Part" style={{ width: "300px" }} />
      <div>
        <h2>ENGINEERING</h2>
        <p>Solid assembly | Reverse engineering | Reliability testing.</p>
        <ul>
          <li>Solid Assembly</li>
          <li>Reverse Engineering</li>
          <li>Testing & Validation</li>
        </ul>
      </div>
    </div>
  );
}
