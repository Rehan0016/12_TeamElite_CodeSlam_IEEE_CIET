import React from "react";
import bgImage from "../assets/last.jpg"; // replace with your image path

export default function Last() {
  return (
    <div
      style={{
        position: "relative",            // make this parent relative
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        color: "#fff",
      }}
    >
      <div
        id="bl"
        style={{
          position: "absolute",          // position at bottom-left
          bottom: "20px",
          left: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h1 style={{ color: "black", margin: 0 }}>Jet</h1>
        <h3 style={{ color: "red", margin: "5px 0" }}>melts , lathes , bandsaws</h3>
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            height: "40px",
            width: "190px",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          View More Photos
        </button>
      </div>
    </div>
  );
}
