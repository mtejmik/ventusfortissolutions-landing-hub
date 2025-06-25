
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ContactInfoSectionProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactInfoSection = ({ formData, onChange }: ContactInfoSectionProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName" className="text-orange-warm font-semibold">First Name *</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
          onChange={onChange}
          className="mt-2 border-2 border-gray-200 focus:border-orange-warm"
        />
      </div>
    </>
  );
};

export default ContactInfoSection;
