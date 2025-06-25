
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import ContactInfoSection from '@/components/wholesaler/ContactInfoSection';
import PropertyInfoSection from '@/components/wholesaler/PropertyInfoSection';
import DatePickerField from '@/components/wholesaler/DatePickerField';
import PropertyDetailsSection from '@/components/wholesaler/PropertyDetailsSection';
import FileUploadSection from '@/components/wholesaler/FileUploadSection';
import FormHeader from '@/components/wholesaler/FormHeader';
import FormFooter from '@/components/wholesaler/FormFooter';

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
        <FormHeader />

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

            <PropertyDetailsSection
              value={formData.propertyDetails}
              onChange={handleInputChange}
            />

            <FileUploadSection 
              attachedFiles={attachedFiles}
              onFilesChange={setAttachedFiles}
            />

            <Button
              type="submit"
              className="w-full bg-orange-warm hover:bg-orange-warm/90 text-white py-4 text-lg font-semibold rounded-lg"
            >
              Submit Deal for Review
            </Button>
          </form>

          <FormFooter />
        </div>
      </div>
    </div>
  );
};

export default WholesalerForm;
