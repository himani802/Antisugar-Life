
import Hero from "../components/Hero";

import "./Home.css";

import SignatureProduct from "../components/SignatureProduct";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <SignatureProduct />
      <div className="home">
      {/* Our Story Section */}
      <section className="story-section">
        <h2>Our Story</h2>
        <p>
          At Anti Sugar Life, we're reimagining Indian sweets without refined sugar. What started as a personal quest for healthier indulgence turned into a mission — to make traditional mithai accessible to those cutting back on sugar, without losing the joy or taste.
        </p>
        <p>This is our small step towards a sweeter, cleaner future.</p>
      </section>

      {/* Why Choose AntiSugar Life */}
      <section className="why-section">
        <h2>Why Choose AntiSugar Life?</h2>
        <div className="card-container">
          <div className="card">
            <h3>Sugar Free</h3>
            <p>
              Made with natural sweeteners instead of refined sugar, perfect for diabetics and health-conscious individuals.
            </p>
          </div>
          <div className="card">
            <h3>Premium Ingredients</h3>
            <p>
              We use only the highest quality ingredients to ensure authentic taste and texture.
            </p>
          </div>
          <div className="card">
            <h3>Traditional Recipes</h3>
            <p>
              Our sweets follow traditional recipes, modified only to remove refined sugar without compromising on taste.
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Home;
