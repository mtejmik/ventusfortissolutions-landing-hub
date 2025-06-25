
import React from 'react';
import { Label } from '@/components/ui/label';

interface PropertyDetailsSectionProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const PropertyDetailsSection = ({ value, onChange }: PropertyDetailsSectionProps) => {
  return (
    <div>
      <Label htmlFor="propertyDetails" className="text-orange-warm font-semibold">
        Property Details & Deal Info
      </Label>
      <textarea
        id="propertyDetails"
        name="propertyDetails"
        value={value}
        onChange={onChange}
        rows={4}
        className="mt-2 w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-orange-warm focus:outline-none"
        placeholder="Property condition, comps, neighborhood info, special terms..."
      />
    </div>
  );
};

export default PropertyDetailsSection;
