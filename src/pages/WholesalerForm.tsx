
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import ContactInfoSection from '@/components/wholesaler/ContactInfoSection';
import PropertyInfoSection from '@/components/wholesaler/PropertyInfoSection';
import DatePickerField from '@/components/wholesaler/DatePickerField';
import FileUploadSection from '@/components/wholesaler/FileUploadSection';

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
    propertyDetails: ''
  });

  const [contractDeadline, setContractDeadline] = useState<Date>();
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Wholesaler form submitted:', formData);
    console.log('Contract deadline:', contractDeadline);
    console.log('Attached files:', attachedFiles);
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
            <ContactInfoSection 
              formData={formData} 
              onChange={handleInputChange} 
            />

            <PropertyInfoSection 
              formData={formData} 
              onChange={handleInputChange} 
            />

            <DatePickerField
              label="Contract Deadline"
              value={contractDeadline}
              onChange={setContractDeadline}
              required
              placeholder="Pick a deadline date"
            />

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
              
              <FileUploadSection 
                attachedFiles={attachedFiles}
                onFilesChange={setAttachedFiles}
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
