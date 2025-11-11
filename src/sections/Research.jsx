

import res from "../assets/research.jpg";
export default function Research() {
  return (
    <section id="research" className="research">
      <div className="research-left">
        <img src={res} alt="machine" style={{marginRight:"40px"}}/>
      </div>
      <div className="research-right">
        <h2 style={{fontSize:"40px", marginBottom:"40px"}}>RESEARCH <span style={{color:"red"}}>& </span>DEVELOPMENT</h2>
        <p>Advanced experimentation & innovation.</p>

        <h3 style={{paddingTop: "25px"}}>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem fuga molestiae assumenda incidunt vero laudantium officia quisquam quaerat aut non hic inventore, porro eos!</p>
      </div>
    </section>
  );
}
