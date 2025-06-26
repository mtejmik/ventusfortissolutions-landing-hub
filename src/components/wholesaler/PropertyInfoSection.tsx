
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PropertyInfoSectionProps {
  formData: {
    propertyAddress: string;
    contractPrice: string;
    arv: string;
    rehab: string;
    wholesaleFee: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PropertyInfoSection = ({ formData, onChange }: PropertyInfoSectionProps) => {
  return (
    <>
      <div>
        <Label htmlFor="propertyAddress" className="text-orange-warm font-semibold">Property Address *</Label>
        <Input
          id="propertyAddress"
          name="propertyAddress"
          value={formData.propertyAddress}
          onChange={onChange}
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
            onChange={onChange}
            required
            className="mt-2 border-2 border-gray-200 focus:border-orange-warm"
            placeholder="$0"
          />
        </div>
        <div>
          <Label htmlFor="arv" className="text-orange-warm font-semibold">ARV (After Repair Value)</Label>
          <Input
            id="arv"
            name="arv"
            value={formData.arv}
            onChange={onChange}
            className="mt-2 border-2 border-gray-200 focus:border-orange-warm"
            placeholder="$0"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="rehab" className="text-orange-warm font-semibold">Estimated Rehab</Label>
          <Input
            id="rehab"
            name="rehab"
            value={formData.rehab}
            onChange={onChange}
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
            onChange={onChange}
            required
            className="mt-2 border-2 border-gray-200 focus:border-orange-warm"
            placeholder="$0"
          />
        </div>
      </div>
    </>
  );
};

export default PropertyInfoSection;
