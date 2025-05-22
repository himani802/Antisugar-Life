import "./TermsOfService.css";

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms of Service</h1>
      <p className="terms-date">Effective Date: May 21, 2025</p>

      <p className="terms-paragraph">
        Welcome to Antisugar Life, operated by Atlas Ventures ("Company", "we", "us", or "our"). By using our website (hosted on Shopify) and purchasing our products, you agree to be bound by the following Terms of Service. Please read them carefully before using our services.
      </p>

      <h2 className="terms-heading">1. Company Information</h2>
      <ul className="terms-list">
        <li>Business Name: Atlas Ventures</li>
        <li>Brand Name: Antisugar Life</li>
        <li>GSTIN: 23BFEPJ3661J1ZJ</li>
        <li>Registered Address: 8/1/8, Purani Nagar Palika ke samne, Bhandari Ahata, Agar, 465441, Madhya Pradesh, India</li>
        <li>Email: antisugarlifeco@gmail.com</li>
      </ul>

      <h2 className="terms-heading">2. Eligibility</h2>
      <p className="terms-paragraph">By using our services, you confirm that you are at least 18 years old or are using the site under the supervision of a parent or legal guardian.</p>

      <h2 className="terms-heading">3. Products & Orders</h2>
      <ul className="terms-list">
        <li>All products listed are Indian traditional sweets made without sugar.</li>
        <li>We reserve the right to refuse or cancel any order for any reason, including errors in product or pricing information.</li>
        <li>Product images are for illustrative purposes only. Actual products may vary slightly in appearance or packaging.</li>
      </ul>

      <h2 className="terms-heading">4. Pricing & Payments</h2>
      <ul className="terms-list">
        <li>All prices are in INR and inclusive of applicable taxes.</li>
        <li>Payments are processed securely through Shopify-supported payment gateways.</li>
        <li>We reserve the right to change pricing at any time without notice.</li>
      </ul>

      <h2 className="terms-heading">5. Shipping & Delivery</h2>
      <ul className="terms-list">
        <li>Orders are shipped across India using third-party logistics partners.</li>
        <li>Delivery timelines are estimates and may vary due to factors beyond our control (weather, courier delays, etc.).</li>
        <li>Shipping charges (if applicable) will be displayed at checkout.</li>
      </ul>

      <h2 className="terms-heading">6. Returns & Refunds</h2>
      <p className="terms-paragraph">Due to the perishable nature of sweets, we do not accept returns unless the product is damaged or incorrect.</p>
      <p className="terms-paragraph">Refunds/Exchanges will be provided only in the following cases:</p>
      <ul className="terms-list">
        <li>You received the wrong item.</li>
        <li>The item was damaged during transit.</li>
      </ul>
      <p className="terms-paragraph">To request a refund or replacement, contact us within 24 hours of delivery at <a href="mailto:antisugarlifeco@gmail.com">antisugarlifeco@gmail.com</a> with photo evidence.</p>

      <h2 className="terms-heading">7. Intellectual Property</h2>
      <p className="terms-paragraph">All content on our website, including logos, product images, text, and design, is the property of Antisugar Life / Atlas Ventures and protected by copyright laws. You may not reproduce or use our content without prior written permission.</p>

      <h2 className="terms-heading">8. Prohibited Uses</h2>
      <p className="terms-paragraph">You agree not to:</p>
      <ul className="terms-list">
        <li>Use the site for unlawful purposes</li>
        <li>Transmit malware or harmful code</li>
        <li>Attempt to gain unauthorized access to the site or its systems</li>
        <li>Use bots or automated systems to place orders</li>
      </ul>
      <p className="terms-paragraph">We reserve the right to suspend or terminate your access for violating these terms.</p>

      <h2 className="terms-heading">9. Limitation of Liability</h2>
      <ul className="terms-list">
        <li>Any indirect, incidental, or consequential damages</li>
        <li>Delays or delivery failures beyond our control</li>
        <li>Allergic reactions or health issues (please read ingredients before purchase)</li>
      </ul>
      <p className="terms-paragraph">Always consult your doctor if you have specific dietary concerns.</p>

      <h2 className="terms-heading">10. Changes to Terms</h2>
      <p className="terms-paragraph">We may update these Terms of Service from time to time. Continued use of the website means you accept any updated terms. The latest version will always be posted on this page.</p>

      <h2 className="terms-heading">11. Governing Law</h2>
      <p className="terms-paragraph">These Terms are governed by and construed in accordance with the laws of India, with exclusive jurisdiction in the courts of Agar, Madhya Pradesh.</p>

      <h2 className="terms-heading">12. Contact Us</h2>
      <ul className="terms-list">
        <li>Atlas Ventures</li>
        <li>Email: <a href="mailto:antisugarlifeco@gmail.com">antisugarlifeco@gmail.com</a></li>
        <li>Address: 8/1/8, Purani Nagar Palika ke samne, Bhandari Ahata, Agar, 465441, Madhya Pradesh, India</li>
      </ul>
    </div>
  );
};

export default TermsOfService;
