
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from '@/hooks/use-toast';
import { Upload, X, FileImage, FileVideo, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

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
    offerTypes: [] as string[],
    hasMortgage: '',
    mortgageAmount: '',
    interestRate: '',
    propertyVacancy: '',
    additionalInfo: ''
  });

  const [files, setFiles] = useState<File[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOfferTypeChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      offerTypes: prev.offerTypes.includes(option)
        ? prev.offerTypes.filter(o => o !== option)
        : [...prev.offerTypes, option]
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles = selectedFiles.filter(file => {
      const isValidType = file.type.startsWith('image/') || 
                         file.type.startsWith('video/') || 
                         file.type === 'application/pdf' ||
                         file.type.includes('document') ||
                         file.type.includes('text');
      const isValidSize = file.size <= 50 * 1024 * 1024; // 50MB limit
      
      if (!isValidType) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported file type.`,
          variant: "destructive"
        });
      }
      if (!isValidSize) {
        toast({
          title: "File too large",
          description: `${file.name} is larger than 50MB.`,
          variant: "destructive"
        });
      }
      
      return isValidType && isValidSize;
    });

    setFiles(prev => [...prev, ...validFiles]);
    e.target.value = '';
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <FileImage className="w-4 h-4" />;
    if (file.type.startsWith('video/')) return <FileVideo className="w-4 h-4" />;
    return <FileText className="w-4 h-4" />;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Seller form submitted:', { ...formData, files });
    toast({
      title: "Form Submitted Successfully",
      description: "We'll contact you within 24 hours with your offer options!"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-light to-sky-soft">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-blue-dark mb-4">
            Get Your Property Offer Today
          </h1>
          <p className="text-xl font-lato text-gray-700 max-w-2xl mx-auto">
            Multiple offer options available: Cash offers, creative financing, and subject-to mortgage takeovers. Get your personalized offer in 24 hours.
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

            {/* Type of Offers */}
            <div>
              <Label className="text-blue-dark font-semibold mb-4 block">Type of Offers You're Interested In *</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="cash"
                    checked={formData.offerTypes.includes('cash')}
                    onChange={() => handleOfferTypeChange('cash')}
                    className="rounded border-2 border-gray-200"
                  />
                  <Label htmlFor="cash" className="text-gray-700">Cash Offer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="creative-finance"
                    checked={formData.offerTypes.includes('creative-finance')}
                    onChange={() => handleOfferTypeChange('creative-finance')}
                    className="rounded border-2 border-gray-200"
                  />
                  <Label htmlFor="creative-finance" className="text-gray-700">Creative Financing (Owner Financing, Lease Options, etc.)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="subject-to"
                    checked={formData.offerTypes.includes('subject-to')}
                    onChange={() => handleOfferTypeChange('subject-to')}
                    className="rounded border-2 border-gray-200"
                  />
                  <Label htmlFor="subject-to" className="text-gray-700">Subject-To Mortgage Takeover</Label>
                </div>
              </div>
            </div>

            {/* Mortgage Information */}
            <div>
              <Label htmlFor="hasMortgage" className="text-blue-dark font-semibold">Is there a mortgage on the property? *</Label>
              <select
                id="hasMortgage"
                name="hasMortgage"
                value={formData.hasMortgage}
                onChange={handleInputChange}
                required
                className="mt-2 w-full h-10 px-3 py-2 border-2 border-gray-200 rounded-md focus:border-blue-dark focus:outline-none"
              >
                <option value="">Select Option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {formData.hasMortgage === 'yes' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="mortgageAmount" className="text-blue-dark font-semibold">How much mortgage is left? *</Label>
                  <Input
                    id="mortgageAmount"
                    name="mortgageAmount"
                    value={formData.mortgageAmount}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-2 border-gray-200 focus:border-blue-dark"
                    placeholder="$0"
                  />
                </div>
                <div>
                  <Label htmlFor="interestRate" className="text-blue-dark font-semibold">What's the interest rate? *</Label>
                  <Input
                    id="interestRate"
                    name="interestRate"
                    value={formData.interestRate}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-2 border-gray-200 focus:border-blue-dark"
                    placeholder="0.00%"
                  />
                </div>
              </div>
            )}

            {/* Property Vacancy */}
            <div>
              <Label htmlFor="propertyVacancy" className="text-blue-dark font-semibold">Is the property vacant? *</Label>
              <select
                id="propertyVacancy"
                name="propertyVacancy"
                value={formData.propertyVacancy}
                onChange={handleInputChange}
                required
                className="mt-2 w-full h-10 px-3 py-2 border-2 border-gray-200 rounded-md focus:border-blue-dark focus:outline-none"
              >
                <option value="">Select Option</option>
                <option value="yes">Yes</option>
                <option value="occupied">Occupied</option>
                <option value="vacant-at-closing">Vacant at Closing</option>
              </select>
            </div>

            {/* File Upload Section */}
            <div>
              <Label className="text-blue-dark font-semibold mb-4 block">Property Photos, Documents & Videos</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">Upload photos, documents, or videos</p>
                  <p className="text-sm text-gray-500">Supported formats: JPG, PNG, PDF, MP4, MOV, DOC (Max 50MB each)</p>
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*,.pdf,.doc,.docx,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Button type="button" variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
                  Choose Files
                </Button>
              </div>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium text-gray-700">Uploaded Files:</p>
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {getFileIcon(file)}
                        <div>
                          <p className="text-sm font-medium text-gray-700">{file.name}</p>
                          <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="additionalInfo" className="text-blue-dark font-semibold">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={4}
                className="mt-2 border-2 border-gray-200 focus:border-blue-dark"
                placeholder="Tell us about your property condition, situation, or any questions..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-dark hover:bg-blue-dark/90 text-white py-4 text-lg font-semibold rounded-lg"
            >
              Get My Offer Options Now
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>🔒 Your information is secure and confidential</p>
            <p>📞 We'll contact you within 24 hours</p>
            <p>💰 Multiple financing options available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerForm;
