import React from 'react';
import { FileTypeIcon } from 'lucide-react';
export function Header() {
  return <header className="bg-indigo-700 text-white py-6 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <FileTypeIcon size={28} className="mr-3" />
        <h1 className="text-2xl font-bold">Rapid Document Converter</h1>
      </div>
      <div className="container mx-auto px-4 mt-2 text-center text-indigo-100 text-sm">
        Quickly convert your documents to any format with AWS Lambda
      </div>
    </header>;
}