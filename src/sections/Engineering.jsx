import React from "react";
import engineImg from "../assets/engineering.jpg"; // make sure file name is correct

export default function Engineering() {
  return (
    <section id="engineering" className="engineering">
      <div className="eng-left">
      <img 
  src={engineImg} 
  alt="Engineering" 
  className="engine-img" 
  style={{ 
    marginRight: "100px",
    height: "600px"
   }} 
/>

      </div>

      <div className="eng-right">
        <h2 style={{ 
    marginBottom: "40px",
    
   }}>ENGINEERING</h2>
        <hr></hr>
        <p style={{marginTop: "40px"}}>Precision machining & product optimization.
          Cost effective solutions for complex challenges.
        </p>
        
        <br></br>
        
        <h2>Lorem ipsum dolor sit amet.</h2>
        <hr></hr>
        <p style={{marginTop: "40px"}}>lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nisi odit cum eum quidem aspernatur quis natus nesciunt? Consequuntur velit, quisquam omnis veniam adipisci iste autem nulla! Vero, quasi ullam.</p>
        
      </div>
    </section>
  );
}
