
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const SellerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyType: '',
    askingPrice: '',
    timeframe: '',
    additionalInfo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Seller form submitted:', formData);
    toast({
      title: "Form Submitted Successfully",
      description: "We'll contact you within 24 hours with your cash offer!"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-light to-sky-soft">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-blue-dark mb-4">
            Get Your Cash Offer Today
          </h1>
          <p className="text-xl font-lato text-gray-700 max-w-2xl mx-auto">
            Sell your property fast with no repairs, no fees, and no hassles. Get a fair cash offer in 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-blue-dark font-semibold">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="mt-2 border-2 border-gray-200 focus:border-blue-dark"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-blue-dark font-semibold">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="mt-2 border-2 border-gray-200 focus:border-blue-dark"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-blue-dark font-semibold">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 border-2 border-gray-200 focus:border-blue-dark"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-blue-dark font-semibold">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-2 border-2 border-gray-200 focus:border-blue-dark"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="propertyAddress" className="text-blue-dark font-semibold">Property Address *</Label>
              <Input
                id="propertyAddress"
                name="propertyAddress"
                value={formData.propertyAddress}
                onChange={handleInputChange}
                required
                className="mt-2 border-2 border-gray-200 focus:border-blue-dark"
                placeholder="Street, City, State, ZIP"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="propertyType" className="text-blue-dark font-semibold">Property Type *</Label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full h-10 px-3 py-2 border-2 border-gray-200 rounded-md focus:border-blue-dark focus:outline-none"
                >
                  <option value="">Select Property Type</option>
                  <option value="single-family">Single Family Home</option>
                  <option value="multi-family">Multi-Family</option>
                  <option value="condo">Condo/Townhome</option>
                  <option value="land">Vacant Land</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div>
                <Label htmlFor="askingPrice" className="text-blue-dark font-semibold">Asking Price</Label>
                <Input
                  id="askingPrice"
                  name="askingPrice"
                  value={formData.askingPrice}
                  onChange={handleInputChange}
                  className="mt-2 border-2 border-gray-200 focus:border-blue-dark"
                  placeholder="$0"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="timeframe" className="text-blue-dark font-semibold">Timeframe to Sell *</Label>
              <select
                id="timeframe"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleInputChange}
                required
                className="mt-2 w-full h-10 px-3 py-2 border-2 border-gray-200 rounded-md focus:border-blue-dark focus:outline-none"
              >
                <option value="">Select Timeframe</option>
                <option value="asap">ASAP</option>
                <option value="1-month">Within 1 Month</option>
                <option value="3-months">1-3 Months</option>
                <option value="6-months">3-6 Months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <Label htmlFor="additionalInfo" className="text-blue-dark font-semibold">Additional Information</Label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={4}
                className="mt-2 w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-blue-dark focus:outline-none"
                placeholder="Tell us about your property condition, situation, or any questions..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-dark hover:bg-blue-dark/90 text-white py-4 text-lg font-semibold rounded-lg"
            >
              Get My Cash Offer Now
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>🔒 Your information is secure and confidential</p>
            <p>📞 We'll contact you within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerForm;
