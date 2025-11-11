import useScrollNav from "../hooks/useScrollNav";

export default function Navbar() {
  const navStyle = useScrollNav();

  return (
    <nav className={`navbar ${navStyle}`}>
      <div className="logo">CODE SLAM</div>
      <div className="nav-links">
        <span>Home</span>
        <span>Engineering</span>
        <span>Prototype</span>
        <span>R&D</span>
      </div>
    </nav>
  );
}
