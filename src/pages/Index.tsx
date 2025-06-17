
import React from 'react';
import CTACard from '@/components/CTACard';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const handleGetOffer = () => {
    toast({
      title: "Get Offer",
      description: "Redirecting to property submission form...",
    });
    console.log("Get Offer clicked");
  };

  const handleSubmitDeal = () => {
    toast({
      title: "Submit Deal",
      description: "Opening joint venture partnership form...",
    });
    console.log("Submit Deal clicked");
  };

  const handleSubmitBuybox = () => {
    toast({
      title: "Submit Buybox",
      description: "Taking you to buyer criteria form...",
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
            Your Trusted Partner in Real Estate Wholesaling, Investing & Joint Ventures
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
              description="Looking to sell fast? Submit your property and get an offer today!"
              buttonText="Get Offer"
              buttonStyle="primary"
              backgroundColor="#D6ECFF"
              onButtonClick={handleGetOffer}
            />

            {/* Wholesaler Card */}
            <CTACard
              title="Wholesaler?"
              description="Have a deal? Partner with us and let's JV on your next contract!"
              buttonText="Submit Deal"
              buttonStyle="secondary"
              backgroundColor="#FFEEDB"
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
      <div className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 font-lato">
            © 2024 VentusFortis Solutions. Connecting opportunities in real estate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
