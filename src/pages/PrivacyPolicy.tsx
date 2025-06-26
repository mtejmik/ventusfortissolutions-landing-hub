
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold font-montserrat text-gray-900 mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 font-lato space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p>
              VentusFortis Solutions LLC ("we," "us," or "our") operates a real estate wholesaling platform at www.ventusfortissolutions.com ("Website"). We connect sellers/realtors, wholesalers, and investors/buyers by collecting information through pop-up submission forms to facilitate real estate deals, including offers from sellers, joint venture (JV) contracts with wholesalers, and buybox preferences from investors. This Privacy Policy explains how we collect, use, share, and protect your personal information in compliance with applicable U.S. state laws, including the California Consumer Privacy Act (CCPA), California Online Privacy Protection Act (CalOPPA), and other state privacy regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p>We collect the following personal information through our Website's pop-up submission forms and other interactions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Sellers/Realtors:</strong> Name, email address, phone number, property details (e.g., address, condition, asking price), and other information provided in offer submissions.</li>
              <li><strong>Wholesalers:</strong> Name, email address, phone number, contract details for joint venture (JV) deals, and related business information.</li>
              <li><strong>Investors/Buyers:</strong> Name, email address, phone number, buybox preferences (e.g., property type, location, price range), and investment criteria.</li>
              <li><strong>Automatically Collected:</strong> IP address, browser type, device information, and Website usage data via cookies or analytics tools (e.g., Google Analytics).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Facilitate real estate wholesaling transactions, including matching sellers' offers with wholesalers or investors.</li>
              <li>Coordinate joint venture (JV) contracts with wholesalers.</li>
              <li>Share relevant deals with investors based on their buybox preferences.</li>
              <li>Communicate with you (e.g., via email or phone) about deals, updates, or marketing (with your consent where required).</li>
              <li>Improve our Website and services through analytics.</li>
              <li>Comply with legal obligations, such as state privacy laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Share Your Information</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Business Partners:</strong> Wholesalers, investors, or buyers to facilitate deals (e.g., sharing seller property details with interested investors or wholesalers).</li>
              <li><strong>Service Providers:</strong> Third-party tools for email marketing (e.g., Mailchimp), analytics (e.g., Google Analytics), or hosting, which process data on our behalf.</li>
              <li><strong>Legal Compliance:</strong> If required by law, such as to comply with a court order or state regulations.</li>
            </ul>
            <p>We do not sell your personal information for monetary compensation, but sharing with business partners for wholesaling purposes may be considered a "sale" under CCPA. You may opt out (see Section 6).</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to track Website usage, personalize content, and analyze traffic. See our Cookie Policy for details. You can manage cookie preferences via our cookie consent banner or browser settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Storage and Security</h2>
            <p>We store your information on secure servers and use industry-standard measures (e.g., encryption) to protect it. However, no system is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Privacy Rights</h2>
            <p>Under U.S. state laws (e.g., CCPA), you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request details about the personal information we collect or share.</li>
              <li><strong>Delete:</strong> Request deletion of your personal information, subject to legal exceptions.</li>
              <li><strong>Opt Out:</strong> Opt out of the "sale" of your information (e.g., sharing with wholesalers or investors).</li>
              <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising these rights.</li>
            </ul>
            <p>To exercise these rights, contact us at info@ventusfortissolutions.com. We will respond within the timeframes required by law (e.g., 45 days for CCPA requests).</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Data Retention</h2>
            <p>We retain your information only as long as necessary to fulfill the purposes outlined in this policy (e.g., to complete a deal or comply with legal obligations). Seller, wholesaler, or investor data is deleted upon request or when no longer needed, unless required by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Children's Privacy</h2>
            <p>Our Website is not intended for individuals under 18. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy to reflect changes in our practices or legal requirements. The updated policy will be posted on our Website with a revised "Last Updated" date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
            <p>For questions or to exercise your privacy rights, contact us at:</p>
            <p>
              VentusFortis Solutions LLC<br />
              info@ventusfortissolutions.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
