
import React from "react";
import jet from "../assets/jet-machine.png";

export default function RnD() {
  return (
    <div className="section rnd">
      <div className="container split reverse">
        <div className="left reveal">
          <h2 className="section-title">RESEARCH <span className="accent">&</span> DEVELOPMENT</h2>
          <p className="section-desc">Lab & field testing to ensure reliability and performance.</p>
          <a className="btn-outline" href="#contact">Let's collaborate</a>
        </div>
        <div className="right reveal">
          <img src={jet} alt="machine" className="rnd-art" />
        </div>
      </div>
    </div>
  );
}