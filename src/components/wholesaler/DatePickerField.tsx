
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface DatePickerFieldProps {
  label: string;
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  required?: boolean;
  placeholder?: string;
}

const DatePickerField = ({ 
  label, 
  value, 
  onChange, 
  required = false, 
  placeholder = "Pick a date" 
}: DatePickerFieldProps) => {
  return (
    <div>
      <Label className="text-orange-warm font-semibold">
        {label} {required && '*'}
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "mt-2 w-full justify-start text-left font-normal border-2 border-gray-200 focus:border-orange-warm",
              !value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(value, "PPP") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            disabled={(date) => date < new Date()}
            initialFocus
            className="p-3 pointer-events-auto"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePickerField;
