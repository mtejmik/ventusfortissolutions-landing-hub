import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from '@/hooks/use-toast';
import { Paperclip, FileImage, FileVideo, File, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      const isValidType = file.type.startsWith('image/') || 
                         file.type.startsWith('video/') || 
                         file.type === 'application/pdf' ||
                         file.type.includes('document') ||
                         file.type.includes('sheet') ||
                         file.type.includes('presentation');
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit
      
      if (!isValidType) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported file type.`,
          variant: "destructive"
        });
        return false;
      }
      
      if (!isValidSize) {
        toast({
          title: "File too large",
          description: `${file.name} is larger than 10MB.`,
          variant: "destructive"
        });
        return false;
      }
      
      return true;
    });

    setAttachedFiles(prev => [...prev, ...validFiles]);
    
    if (validFiles.length > 0) {
      toast({
        title: "Files attached",
        description: `${validFiles.length} file(s) attached successfully.`
      });
    }
  };

  const removeFile = (indexToRemove: number) => {
    setAttachedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
    toast({
      title: "File removed",
      description: "File has been removed from attachments."
    });
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) return <FileImage className="w-4 h-4" />;
    if (fileType.startsWith('video/')) return <FileVideo className="w-4 h-4" />;
    return <File className="w-4 h-4" />;
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
              <Label htmlFor="contractDeadline" className="text-orange-warm font-semibold">Contract Deadline *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "mt-2 w-full justify-start text-left font-normal border-2 border-gray-200 focus:border-orange-warm",
                      !contractDeadline && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {contractDeadline ? format(contractDeadline, "PPP") : <span>Pick a deadline date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={contractDeadline}
                    onSelect={setContractDeadline}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
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
              
              {/* File Upload Section */}
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Paperclip className="w-4 h-4 text-orange-warm" />
                  <Label className="text-orange-warm font-medium">Attach Photos, Documents & Videos</Label>
                </div>
                
                <input
                  type="file"
                  id="fileUpload"
                  multiple
                  accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('fileUpload')?.click()}
                  className="w-full border-2 border-orange-warm text-orange-warm hover:bg-orange-warm/10"
                >
                  <Paperclip className="w-4 h-4 mr-2" />
                  Choose Files (Photos, Videos, Documents)
                </Button>
                
                <p className="text-sm text-gray-500 mt-2">
                  Supported: Images, Videos, PDF, Word, Excel, PowerPoint (Max 10MB each)
                </p>
                
                {/* Attached Files Display */}
                {attachedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <Label className="text-orange-warm font-medium">Attached Files:</Label>
                    {attachedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded border">
                        <div className="flex items-center gap-2">
                          {getFileIcon(file.type)}
                          <span className="text-sm text-gray-700 truncate max-w-xs">{file.name}</span>
                          <span className="text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(1)}MB)</span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
