
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const WholesalerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    propertyAddress: '',
    contractPrice: '',
    arv: '',
    rehab: '',
    wholesaleFee: '',
    timeframe: '',
    propertyDetails: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Wholesaler form submitted:', formData);
    toast({
      title: "Deal Submitted Successfully",
      description: "We'll review your deal and get back to you within 24 hours!"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-soft to-orange-warm/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-orange-warm mb-4">
            Submit Your Deal
          </h1>
          <p className="text-xl font-lato text-gray-700 max-w-2xl mx-auto">
            Partner with us to move your wholesale deals fast. We have cash buyers ready to close.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-orange-warm font-semibold">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="mt-2 border-2 border-gray-200 focus:border-orange-warm"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-orange-warm font-semibold">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="mt-2 border-2 border-gray-200 focus:border-orange-warm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-orange-warm font-semibold">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 border-2 border-gray-200 focus:border-orange-warm"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-orange-warm font-semibold">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-2 border-2 border-gray-200 focus:border-orange-warm"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="company" className="text-orange-warm font-semibold">Company Name</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="mt-2 border-2 border-gray-200 focus:border-orange-warm"
              />
            </div>

            <div>
              <Label htmlFor="propertyAddress" className="text-orange-warm font-semibold">Property Address *</Label>
              <Input
                id="propertyAddress"
                name="propertyAddress"
                value={formData.propertyAddress}
                onChange={handleInputChange}
                required
                className="mt-2 border-2 border-gray-200 focus:border-orange-warm"
                placeholder="Street, City, State, ZIP"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="contractPrice" className="text-orange-warm font-semibold">Contract Price *</Label>
                <Input
                  id="contractPrice"
                  name="contractPrice"
                  value={formData.contractPrice}
                  onChange={handleInputChange}
                  required
                  className="mt-2 border-2 border-gray-200 focus:border-orange-warm"
                  placeholder="$0"
                />
              </div>
              <div>
                <Label htmlFor="arv" className="text-orange-warm font-semibold">ARV (After Repair Value) *</Label>
                <Input
                  id="arv"
                  name="arv"
                  value={formData.arv}
                  onChange={handleInputChange}
                  required
                  className="mt-2 border-2 border-gray-200 focus:border-orange-warm"
                  placeholder="$0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="rehab" className="text-orange-warm font-semibold">Estimated Rehab *</Label>
                <Input
                  id="rehab"
                  name="rehab"
                  value={formData.rehab}
                  onChange={handleInputChange}
                  required
                  className="mt-2 border-2 border-gray-200 focus:border-orange-warm"
                  placeholder="$0"
                />
              </div>
              <div>
                <Label htmlFor="wholesaleFee" className="text-orange-warm font-semibold">Your Wholesale Fee *</Label>
                <Input
                  id="wholesaleFee"
                  name="wholesaleFee"
                  value={formData.wholesaleFee}
                  onChange={handleInputChange}
                  required
                  className="mt-2 border-2 border-gray-200 focus:border-orange-warm"
                  placeholder="$0"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="timeframe" className="text-orange-warm font-semibold">Contract Deadline *</Label>
              <select
                id="timeframe"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleInputChange}
                required
                className="mt-2 w-full h-10 px-3 py-2 border-2 border-gray-200 rounded-md focus:border-orange-warm focus:outline-none"
              >
                <option value="">Select Timeframe</option>
                <option value="3-days">3 Days</option>
                <option value="1-week">1 Week</option>
                <option value="2-weeks">2 Weeks</option>
                <option value="1-month">1 Month</option>
              </select>
            </div>

            <div>
              <Label htmlFor="propertyDetails" className="text-orange-warm font-semibold">Property Details & Deal Info</Label>
              <textarea
                id="propertyDetails"
                name="propertyDetails"
                value={formData.propertyDetails}
                onChange={handleInputChange}
                rows={4}
                className="mt-2 w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-orange-warm focus:outline-none"
                placeholder="Property condition, comps, neighborhood info, special terms..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-warm hover:bg-orange-warm/90 text-white py-4 text-lg font-semibold rounded-lg"
            >
              Submit Deal for Review
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>🤝 Joint venture partnerships available</p>
            <p>⚡ Fast response within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholesalerForm;
