import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Engineering from "./sections/Engineering";
import Prototyping from "./sections/Prototyping";
import Research from "./sections/Research";
import Footer from "./sections/Footer";
import "./styles/global.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import Last from "./sections/Last";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => {
      gsap.from(sec.children, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
        },
      });
    });

    const themes = [
      { id: "hero", theme: "nav-dark" },
      { id: "engineering", theme: "nav-red" },
      { id: "prototyping", theme: "nav-white" },
      { id: "research", theme: "nav-dark" },
    ];

    themes.forEach((t) => {
      ScrollTrigger.create({
        trigger: `#${t.id}`,
        start: "top top",
        onEnter: () => (document.body.className = t.theme),
        onLeaveBack: () => (document.body.className = ""),
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Engineering />
      <Prototyping />
      <Research />
      <HeroSection/>
      <Last/>
      <Footer />
      
    </>
  );
}
