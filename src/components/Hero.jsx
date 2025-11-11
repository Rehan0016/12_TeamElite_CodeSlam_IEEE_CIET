import React from "react";
import heroAsset from "../assets/hero-bg-crop.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg" style={{ backgroundImage: url() }} />
      <div className="hero-inner">
        <h1 className="hero-title reveal">
          ANY PRODUCT <span className="accent">CAN BE IMPROVED</span>
        </h1>
        <p className="hero-sub reveal">We redesign, prototype and test to improve performance and UX.</p>
        <div className="hero-hint reveal">Scroll ↓</div>
      </div>
    </div>
  );
}