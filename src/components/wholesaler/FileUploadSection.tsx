import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Paperclip, FileImage, FileVideo, File } from 'lucide-react';

interface FileUploadSectionProps {
  attachedFiles: File[];
  onFilesChange: (files: File[]) => void;
}

const FileUploadSection = ({ attachedFiles, onFilesChange }: FileUploadSectionProps) => {
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

    onFilesChange([...attachedFiles, ...validFiles]);
    
    if (validFiles.length > 0) {
      toast({
        title: "Files attached",
        description: `${validFiles.length} file(s) attached successfully.`
      });
    }
  };

  const removeFile = (indexToRemove: number) => {
    onFilesChange(attachedFiles.filter((_, index) => index !== indexToRemove));
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

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-3">
        <Paperclip className="w-4 h-4 text-orange-warm" />
        <Label className="text-orange-warm font-medium">Attach Photos, Documents & Videos</Label>
        <span className="text-xs text-gray-500 ml-2">(You don´t have to upload contract if you´re not comfortable with that, we will contact you)</span>
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
  );
};

export default FileUploadSection;
