import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function FormatSelector({
  sourceFormat,
  targetFormat,
  setTargetFormat
}) {
  const formats = ['PDF', 'DOCX', 'HTML', 'XLSX', 'CSV', 'TXT', 'JPG', 'PNG'];
  return <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">Convert To</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="flex items-center bg-gray-50 rounded-md px-4 py-2">
          <span className="text-sm text-gray-600">From: </span>
          <span className="ml-2 font-medium text-gray-800">
            {sourceFormat || 'No file selected'}
          </span>
        </div>
        <div className="flex justify-center">
          <ArrowRightIcon className="h-5 w-5 text-gray-500" />
        </div>
        <div>
          <select value={targetFormat} onChange={e => setTargetFormat(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select target format</option>
            {formats.filter(format => format !== sourceFormat).map(format => <option key={`target-${format}`} value={format}>
                  {format}
                </option>)}
          </select>
        </div>
      </div>
    </div>;
}