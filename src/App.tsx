import React, { useState } from 'react';
import { FileUploader } from './components/FileUploader';
import { FormatSelector } from './components/FormatSelector';
import { ConversionButton } from './components/ConversionButton';
import { ConversionResult } from './components/ConversionResult';
import { Header } from './components/Header';
export function App() {
  const [file, setFile] = useState(null);
  const [targetFormat, setTargetFormat] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [conversionComplete, setConversionComplete] = useState(false);
  const getFileFormat = fileName => {
    const extension = fileName?.split('.').pop()?.toUpperCase() || '';
    return extension;
  };
  const handleConversion = () => {
    if (!file || !targetFormat) return;
    setIsConverting(true);
    // Simulate API call to AWS Lambda
    setTimeout(() => {
      setIsConverting(false);
      setConversionComplete(true);
    }, 2000);
  };
  const resetForm = () => {
    setFile(null);
    setTargetFormat('');
    setConversionComplete(false);
  };
  const sourceFormat = file ? getFileFormat(file.name) : '';
  return <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {!conversionComplete ? <>
              <FileUploader file={file} setFile={setFile} sourceFormat={sourceFormat} />
              <FormatSelector sourceFormat={sourceFormat} targetFormat={targetFormat} setTargetFormat={setTargetFormat} />
              <ConversionButton onConvert={handleConversion} isConverting={isConverting} disabled={!file || !targetFormat} />
            </> : <ConversionResult fileName={file?.name} sourceFormat={sourceFormat} targetFormat={targetFormat} onReset={resetForm} />}
        </div>
      </main>
    </div>;
}