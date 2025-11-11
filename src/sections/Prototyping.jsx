import React from "react";
import proto from "../assets/prototyping.jpg";

export default function Prototyping() {
  return (
    <section
      id="prototyping"
      className="proto"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "40px",
        minHeight: "100vh",
        background: "#f5f5f5", // optional background
        boxSizing: "border-box",
      }}
    >
      {/* LEFT TEXT */}
      <div
        className="proto-left"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <h2 style={{ fontSize: "40px", margin: 0 }}>
          DESIGN <span style={{ color: "red" }}>&</span> PROTOTYPING
        </h2>
        <hr style={{ marginTop: "20px", marginBottom: "20px", width: "50%" }} />
        <p style={{ marginBottom: "10px" }}>
          High‑fidelity prototypes ready for field testing.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          atque qui obcaecati non aspernatur ratione modi accusamus vel rem
          fugit officiis, eius distinctio suscipit facere ex quae, tempora
          quis. Hic.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="proto-right"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <img
          src={proto}
          alt="Prototyping"
          style={{ padding: "20px", maxWidth: "100%", height: "auto" }}
        />
      </div>

      {/* BOTTOM HORIZONTAL DIVS WITH TEXT */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "20vh",           // 20% of screen height
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ flex: 1, textAlign: "justify" , padding:"20px"}}><h4>Designig Tools</h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          atque qui obcaecati non aspernatur ratione modi accusamus vel rem
        </div>
        <div style={{ flex: 1, textAlign: "justify" , padding:"20px"}}><h4>Designig Tools</h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          atque qui obcaecati non aspernatur ratione modi accusamus vel rem
          </div>
        <div style={{ flex: 1, textAlign: "justify" , padding:"20px"}}><h4>Designig Tools</h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          atque qui obcaecati non aspernatur ratione modi accusamus vel rem</div>
        <div style={{ flex: 1, textAlign: "justify" , padding:"20px"}}><h4>Designig Tools</h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          atque qui obcaecati non aspernatur ratione modi accusamus vel rem</div>
      </div>
    </section>
  );
}
