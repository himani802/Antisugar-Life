import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Welcome to AntiSugar Life</h1>
      <p>
        Reimagining Indian sweets without refined sugar. Traditional mithai for
        the health-conscious.
      </p>

      <Link to="/products">
        <button className="hero-btn">Explore Our Products</button>
      </Link>
    </section>
  );
};

export default Hero;
