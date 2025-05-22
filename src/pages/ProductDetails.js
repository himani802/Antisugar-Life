import React, { useState } from 'react';
import './ProductDetails.css';

export default function ProductDetails() {
    const [selectedSize, setSelectedSize] = useState('500gm');
    const price = selectedSize === '500gm' ? 999 : 1500;

    return (
        <div className="product-page">
            <div className="product-image">
                <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=2825&auto=format&fit=crop" alt="Sugar Free Kaju Katli" />
            </div>
            <div className="product-info">
                <h1>Sugar Free Kaju Katli</h1>

                <h3>Select Size</h3>
                <div className="size-options">
                    <label>
                        <input
                            type="radio"
                            value="500gm"
                            checked={selectedSize === '500gm'}
                            onChange={(e) => setSelectedSize(e.target.value)}
                        />
                        500gm
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="1Kg"
                            checked={selectedSize === '1Kg'}
                            onChange={(e) => setSelectedSize(e.target.value)}
                        />
                        1Kg
                    </label>
                </div>

                <h2>₹{price}.00</h2>

                <p>
                    Experience the authentic taste of traditional Kaju Katli without the guilt of refined sugar.
                    Our Sugar Free Kaju Katli is crafted with premium cashews and naturally sweetened with Stevia,
                    making it perfect for those watching their sugar intake or managing diabetes.
                    Each piece delivers the rich, creamy texture and delightful flavor you love, with none of the refined sugar.
                </p>

                <h3>Key Features</h3>
                <ul>
                    <li>100% Sugar Free</li>
                    <li>Made with premium Kaju (Cashews)</li>
                    <li>Sweetened with natural Stevia</li>
                    <li>Perfect for diabetics and health-conscious individuals</li>
                    <li>Authentic taste and texture</li>
                    <li>Freshly made in small batches</li>
                </ul>

                {/* <button className="buy-button">
          Buy Now →
        </button> */}
                <button
                    className="buy-button"
                    onClick={() => window.location.href = "https://homemadesweetsforyou.myshopify.com/products/homemade-kaju-katli-sugar-free "}
                >
                    Buy Now →
                </button>
            </div>
        </div>
    );
}
