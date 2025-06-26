
import React from 'react';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold font-montserrat text-gray-900 mb-8 text-center">
          Cookies Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 font-lato space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p>
              VentusFortis Solutions LLC ("we," "us," or "our") operates www.ventusfortissolutions.com ("Website"), a real estate wholesaling platform connecting sellers/realtors, wholesalers, and investors/buyers. This Cookie Policy explains how we use cookies and similar technologies to enhance your experience, in compliance with U.S. state laws, including the California Consumer Privacy Act (CCPA) and California Online Privacy Protection Act (CalOPPA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit our Website. They help us provide functionality, analyze usage, and personalize content. Other technologies, like pixel tags, may also be used.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for the Website to function (e.g., navigating pop-up submission forms for sellers, wholesalers, or investors).</li>
              <li><strong>Analytics Cookies:</strong> Track Website usage (e.g., via Google Analytics) to improve performance and user experience.</li>
              <li><strong>Marketing Cookies:</strong> Deliver personalized ads or track marketing campaigns (e.g., for email promotions about real estate deals).</li>
              <li><strong>Third-Party Cookies:</strong> Set by services like Google Analytics or email marketing platforms to support our operations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Cookies</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enable form submissions for sellers' offers, wholesalers' JV contracts, and investors' buybox preferences.</li>
              <li>Analyze Website traffic and user behavior to improve our services.</li>
              <li>Personalize content, such as showing relevant deals based on your submissions.</li>
              <li>Support marketing efforts, like targeted emails (with your consent where required).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Managing Cookies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consent:</strong> When you visit our Website, a cookie consent banner allows you to accept or decline non-essential cookies. Essential cookies cannot be disabled as they are required for Website functionality.</li>
              <li><strong>Browser Settings:</strong> You can block or delete cookies via your browser settings, but this may affect Website functionality (e.g., form submissions).</li>
              <li><strong>Opt-Out:</strong> To opt out of analytics or marketing cookies, use our consent banner or contact us at info@ventusfortissolutions.com.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Third-Party Cookies</h2>
            <p>We use third-party services (e.g., Google Analytics, [other tools like Mailchimp if applicable]) that set cookies. These providers have their own privacy policies, which we encourage you to review.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Privacy Rights</h2>
            <p>Under laws like CCPA, you may request information about cookies collecting your personal data or opt out of their use for certain purposes (e.g., marketing). Contact us at info@ventusfortissolutions.com to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to This Policy</h2>
            <p>We may update this Cookie Policy to reflect changes in our practices or legal requirements. The updated policy will be posted on our Website with a revised "Last Updated" date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
            <p>For questions about cookies, contact us at:</p>
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

export default CookiesPolicy;
