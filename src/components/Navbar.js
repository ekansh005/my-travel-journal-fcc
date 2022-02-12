import globe from "../images/globe.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={globe} alt="globe"></img>
      <p className="navbar--title">my travel journal</p>
    </nav>
  );
}
