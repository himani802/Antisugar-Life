import "./Footer.css"; 


export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Company Name</h2>
          <p>We provide high-quality products and services to our customers worldwide.</p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Legal</h2>
          <ul>
            <li><a href="">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Company Name. All rights reserved.
      </div>
    </footer>
  )
}
