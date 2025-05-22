import SignatureProduct from "../components/SignatureProduct";
import "./Product.css";

export default function Product() {
    return (
        <>
            <div className="products-header">
                <h2>Our Products</h2>
                <p>
                    At AntiSugar Life, we've reimagined traditional Indian sweets without refined sugar.
                    Discover our premium mithai that keeps the authentic taste while being suitable for
                    those watching their sugar intake.
                </p>
            </div>

            <div className="products-grid">
                <SignatureProduct />
            </div>
            </>
    )
}
