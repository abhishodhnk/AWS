import React from 'react';
import { LoaderIcon } from 'lucide-react';
export function ConversionButton({
  onConvert,
  isConverting,
  disabled
}) {
  return <div className="mt-8">
      <button onClick={onConvert} disabled={disabled || isConverting} className={`w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center
          ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}>
        {isConverting ? <>
            <LoaderIcon className="animate-spin -ml-1 mr-2 h-5 w-5" />
            Converting...
          </> : 'Convert Document'}
      </button>
      {disabled && !isConverting && <p className="text-xs text-gray-500 text-center mt-2">
          Please upload a file and select the target format to continue
        </p>}
    </div>;
}