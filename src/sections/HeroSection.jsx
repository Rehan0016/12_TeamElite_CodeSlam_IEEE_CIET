import React from "react";
import bgImage from "../assets/background-image.jpg"; // replace with your image path

export default function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <p style={{padding:"20px" , fontSize:"20px"}}>Lorem15

        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
         Facilis, harum porro vero in, cupiditate recusandae sequi dolores ad, <br></br>
         quisquam provident suscipit eius libero delectus aliquid ullam dolor ratione natus nisi.</p>
    </div>
  );
}
