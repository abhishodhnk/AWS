import React from 'react';
import { CheckCircleIcon, DownloadIcon, RefreshCwIcon } from 'lucide-react';
export function ConversionResult({
  fileName,
  sourceFormat,
  targetFormat,
  onReset
}) {
  const newFileName = fileName ? fileName.replace(/\.[^/.]+$/, `.${targetFormat.toLowerCase()}`) : `converted.${targetFormat.toLowerCase()}`;
  const handleDownload = () => {
    // In a real application, this would download the actual converted file
    alert('File has been successfully Downloaded....😊');
  };
  return <div className="text-center py-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
        <CheckCircleIcon className="h-10 w-10 text-green-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Conversion Complete!
      </h2>
      <p className="text-gray-600 mb-6">
        Your {sourceFormat} file has been successfully converted to{' '}
        {targetFormat}
      </p>
      <div className="bg-gray-50 p-4 rounded-lg mb-6 inline-block mx-auto">
        <p className="text-sm font-medium text-gray-800">{newFileName}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={handleDownload} className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md font-medium">
          <DownloadIcon className="h-5 w-5" />
          Download File
        </button>
        <button onClick={onReset} className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-6 rounded-md font-medium">
          <RefreshCwIcon className="h-5 w-5" />
          Convert Another
        </button>
      </div>
    </div>;
}