
import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold font-montserrat text-gray-900 mb-8 text-center">
          Terms of Use
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 font-lato space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p>
              Welcome to www.ventusfortissolutions.com ("Website"), operated by VentusFortis Solutions LLC ("we," "us," or "our"). This Website facilitates real estate wholesaling by connecting sellers/realtors, wholesalers, and investors/buyers through pop-up submission forms. Sellers submit property offers, wholesalers provide joint venture (JV) contracts, and investors submit buybox preferences for deal matching. These Terms of Use ("Terms") govern your use of the Website and our services. By accessing or using the Website, you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Wholesaling Disclosure</h2>
            <p>
              VentusFortis Solutions LLC operates as a real estate wholesaler. We do not act as a licensed real estate broker or agent unless explicitly stated. Our role is to facilitate deals by assigning contracts or connecting sellers, wholesalers, and investors. We do not purchase properties for ourselves unless specified in a separate agreement. You acknowledge that any deals facilitated through our Website involve contract assignments or introductions, not direct property sales by us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use of the Website</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Eligibility:</strong> You must be 18 or older to use the Website.</li>
              <li><strong>Permitted Use:</strong> Use the Website only for lawful purposes related to real estate wholesaling (e.g., submitting offers, JV contracts, or buybox preferences).</li>
              <li><strong>Prohibited Actions:</strong> Do not misuse the Website, including submitting false information, hacking, or violating intellectual property rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Submission Forms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Sellers/Realtors:</strong> You represent that property information submitted is accurate and that you have the authority to offer the property for wholesaling.</li>
              <li><strong>Wholesalers:</strong> You agree to provide accurate contract details for JV deals and warrant that you have the right to assign such contracts.</li>
              <li><strong>Investors/Buyers:</strong> You confirm that buybox preferences are accurate and that you are responsible for due diligence on any deals presented.</li>
            </ul>
            <p>We reserve the right to reject or remove submissions that violate these Terms or applicable laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
            <p>All content on the Website (e.g., text, logos, design) is owned by VentusFortis Solutions LLC or our licensors. You may not copy, distribute, or modify content without our written consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Third-Party Interactions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our Website connects you with third parties (e.g., sellers, wholesalers, investors). We are not responsible for the actions, agreements, or disputes arising from these interactions.</li>
              <li>You are responsible for conducting due diligence before entering any real estate deal facilitated through our Website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Disclaimer of Warranties</h2>
            <p>The Website and our services are provided "as is." We do not guarantee the accuracy, completeness, or outcome of any deals facilitated. Real estate wholesaling involves risks, and you assume all responsibility for losses or liabilities.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, VentusFortis Solutions LLC is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the Website or participation in deals. This includes disputes with third parties or financial losses.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Governing Law</h2>
            <p>These Terms are governed by the laws of [Your State, e.g., California], without regard to conflict of law principles. Any disputes will be resolved in the state or federal courts of [Your County, e.g., Los Angeles County].</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to These Terms</h2>
            <p>We may update these Terms at any time. The updated Terms will be posted on the Website with a revised "Last Updated" date. Your continued use of the Website constitutes acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
            <p>For questions about these Terms, contact us at:</p>
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

export default TermsOfUse;
