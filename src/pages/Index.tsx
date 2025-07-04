
import React from 'react';
import CTACard from '@/components/CTACard';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const handleGetOffer = () => {
    window.open('/seller-form', '_blank');
    toast({
      title: "Get Offer",
      description: "Opening property submission form in new tab..."
    });
    console.log("Get Offer clicked");
  };

  const handleSubmitDeal = () => {
    window.open('/wholesaler-form', '_blank');
    toast({
      title: "Submit Deal",
      description: "Opening joint venture partnership form in new tab..."
    });
    console.log("Submit Deal clicked");
  };

  const handleSubmitBuybox = () => {
    window.open('/buyer-form', '_blank');
    toast({
      title: "Submit Buybox",
      description: "Opening buyer criteria form in new tab..."
    });
    console.log("Submit Buybox clicked");
  };

  return (
    <div className="min-h-screen bg-sky-soft">
      {/* Header Section */}
      <div className="pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-gray-900 mb-4 animate-fade-in">
            VentusFortis Solutions
          </h1>
          <p className="text-lg md:text-xl font-lato text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Your Trusted Partner in Real Estate Wholesaling,<br />
            Investing & Joint Ventures
          </p>
        </div>
      </div>

      {/* CTA Cards Section */}
      <div className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Seller/Realtor Card */}
            <CTACard 
              title="Seller or Realtor?" 
              description="Looking to sell? Submit your property and get an offer today!" 
              buttonText="Get Offer" 
              buttonStyle="primary" 
              backgroundColor="#D6ECFF" 
              onButtonClick={handleGetOffer} 
            />

            {/* Wholesaler Card */}
            <CTACard 
              title="Wholesaler?" 
              description="Have a deal to push? Let´s JV and find you a buyer!" 
              buttonText="Submit Deal" 
              buttonStyle="secondary" 
              backgroundColor="#FFEEDB" 
              titleColor="text-orange-warm" 
              onButtonClick={handleSubmitDeal} 
            />

            {/* Buyer/Investor Card */}
            <CTACard 
              title="Buyer or Investor?" 
              description="Tell us your buybox — we'll find the right deals for you!" 
              buttonText="Submit Buybox" 
              buttonStyle="outline" 
              backgroundColor="#FFFFFF" 
              onButtonClick={handleSubmitBuybox} 
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="py-8 px-4 border-t border-gray-200 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-lg font-semibold font-montserrat text-gray-800 mb-2">Contact Us</h3>
            <address className="text-gray-600 font-lato not-italic">
              30 N Gould St Ste R<br />
              Sheridan, WY 82801<br />
              <a href="mailto:info@ventusfortissolutions.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                info@ventusfortissolutions.com
              </a>
            </address>
          </div>
          
          {/* Policy Links */}
          <div className="mb-4 flex flex-wrap justify-center gap-6">
            <a 
              href="/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors font-lato"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-use" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors font-lato"
            >
              Terms of Use
            </a>
            <a 
              href="/cookies-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors font-lato"
            >
              Cookies Policy
            </a>
          </div>
          
          <p className="text-gray-600 font-lato">
            © 2025 VentusFortis Solutions LLC. Connecting opportunities in real estate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
