import { useState, useEffect } from "react";

export default function useScrollNav() {
  const [navStyle, setNavStyle] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y < window.innerHeight * 0.8)      setNavStyle("nav-dark");
      else if (y < window.innerHeight * 1.8) setNavStyle("nav-red");
      else                                   setNavStyle("nav-black");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return navStyle;
}
