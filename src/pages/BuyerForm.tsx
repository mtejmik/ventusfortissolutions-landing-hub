import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const BuyerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    investorType: '',
    targetAreas: '',
    minPrice: '',
    maxPrice: '',
    propertyTypes: '',
    rehabBudget: '',
    fundingSource: '',
    timeframe: '',
    additionalCriteria: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buyer form submitted:', formData);
    toast({
      title: "Buybox Submitted Successfully",
      description: "We'll start sending you deals that match your criteria!"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-blue-dark mb-4">
            Submit Your Buybox
          </h1>
          <p className="text-xl font-lato text-gray-700 max-w-2xl mx-auto">
            Tell us exactly what you're looking for and we'll send you deals that match your investment criteria.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 border-2 border-gray-100">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="company" className="text-blue-dark font-semibold">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="mt-2 border-2 border-gray-200 focus:border-blue-dark"
                />
              </div>
              <div>
                <Label htmlFor="investorType" className="text-blue-dark font-semibold">Investor Type *</Label>
                <select
                  id="investorType"
                  name="investorType"
                  value={formData.investorType}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full h-10 px-3 py-2 border-2 border-gray-200 rounded-md focus:border-blue-dark focus:outline-none"
                >
                  <option value="fix-flip">Fix & Flip</option>
                  <option value="buy-hold">Buy & Hold</option>
                  <option value="section-8">Section 8</option>
                  <option value="owner-occupy">Owner Occupy</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="targetAreas" className="text-blue-dark font-semibold">Target Areas/Markets *</Label>
              <Input
                id="targetAreas"
                name="targetAreas"
                value={formData.targetAreas}
                onChange={handleInputChange}
                required
                className="mt-2 border-2 border-gray-200 focus:border-blue-dark"
                placeholder="Cities, counties, or zip codes"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="minPrice" className="text-blue-dark font-semibold">Min Price Range *</Label>
                <Input
                  id="minPrice"
                  name="minPrice"
                  value={formData.minPrice}
                  onChange={handleInputChange}
                  required
                  className="mt-2 border-2 border-gray-200 focus:border-blue-dark"
                  placeholder="$0"
                />
              </div>
              <div>
                <Label htmlFor="maxPrice" className="text-blue-dark font-semibold">Max Price Range *</Label>
                <Input
                  id="maxPrice"
                  name="maxPrice"
                  value={formData.maxPrice}
                  onChange={handleInputChange}
                  required
                  className="mt-2 border-2 border-gray-200 focus:border-blue-dark"
                  placeholder="$0"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="propertyTypes" className="text-blue-dark font-semibold">Property Types *</Label>
              <select
                id="propertyTypes"
                name="propertyTypes"
                value={formData.propertyTypes}
                onChange={handleInputChange}
                required
                className="mt-2 w-full h-10 px-3 py-2 border-2 border-gray-200 rounded-md focus:border-blue-dark focus:outline-none"
              >
                <option value="">Select Property Types</option>
                <option value="single-family">Single Family Only</option>
                <option value="multi-family">Multi-Family Only</option>
                <option value="both-residential">Both SF & MF</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land/Development</option>
                <option value="all">All Property Types</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="rehabBudget" className="text-blue-dark font-semibold">Max Rehab Budget</Label>
                <Input
                  id="rehabBudget"
                  name="rehabBudget"
                  value={formData.rehabBudget}
                  onChange={handleInputChange}
                  className="mt-2 border-2 border-gray-200 focus:border-blue-dark"
                  placeholder="$0"
                />
              </div>
              <div>
                <Label htmlFor="fundingSource" className="text-blue-dark font-semibold">Funding Source *</Label>
                <select
                  id="fundingSource"
                  name="fundingSource"
                  value={formData.fundingSource}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full h-10 px-3 py-2 border-2 border-gray-200 rounded-md focus:border-blue-dark focus:outline-none"
                >
                  <option value="cash">Cash</option>
                  <option value="hard-money">Hard Money</option>
                  <option value="private-lender">Private Lender</option>
                  <option value="conventional">Conventional Loan</option>
                  <option value="partnership">Partnership/JV</option>
                  <option value="dsrc-loan">DSRC Loan</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="timeframe" className="text-blue-dark font-semibold">Purchase Timeframe *</Label>
              <select
                id="timeframe"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleInputChange}
                required
                className="mt-2 w-full h-10 px-3 py-2 border-2 border-gray-200 rounded-md focus:border-blue-dark focus:outline-none"
              >
                <option value="">Select Timeframe</option>
                <option value="immediate">Ready Now</option>
                <option value="30-days">Within 30 Days</option>
                <option value="60-days">Within 60 Days</option>
                <option value="ongoing">Ongoing Basis</option>
              </select>
            </div>

            <div>
              <Label htmlFor="additionalCriteria" className="text-blue-dark font-semibold">Additional Criteria</Label>
              <textarea
                id="additionalCriteria"
                name="additionalCriteria"
                value={formData.additionalCriteria}
                onChange={handleInputChange}
                rows={4}
                className="mt-2 w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-blue-dark focus:outline-none"
                placeholder="Square footage, bed/bath requirements, condition preferences, ROI targets..."
              />
            </div>

            <Button
              type="submit"
              className="w-full border-2 border-blue-dark text-blue-dark bg-transparent hover:bg-blue-dark hover:text-white py-4 text-lg font-semibold rounded-lg transition-all duration-200"
            >
              Submit My Buybox
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>📊 Get deals matching your exact criteria</p>
            <p>🎯 Receive priority deal notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerForm;
