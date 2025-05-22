import { Link } from "react-router-dom";
import "./SignatureProduct.css";

export default function SignatureProduct() {
    return (
        <div className="card">
            <img 
                src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=2825&auto=format&fit=crop" 
                alt="ProductImage" 
                className="product-image"
            />
            <div className="container">
                <h4><b>Sugar Free Kaju Katli</b></h4>
                <p>Made with premium Kaju and Stevia</p>
                <h3><b>From ₹999.00</b></h3>
                <p>Available in: 500gm, 1Kg</p>
                {/* Buy Now Button wrapped in Link */}
                <Link to="/productdetails">
                    <button className="buy-button">Buy Now</button>
                </Link>
            </div>
        </div>
    );
}
