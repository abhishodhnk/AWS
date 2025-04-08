import React, { useCallback } from 'react';
import { UploadCloudIcon, FileIcon } from 'lucide-react';
export function FileUploader({
  file,
  setFile,
  sourceFormat
}) {
  const handleDragOver = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const handleDrop = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  }, [setFile]);
  const handleFileChange = useCallback(e => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  }, [setFile]);
  return <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">
        Upload Document
      </h2>
      {!file ? <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors" onDragOver={handleDragOver} onDrop={handleDrop} onClick={() => document.getElementById('file-input').click()}>
          <UploadCloudIcon className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop your file here, or click to select a file
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Supports various document formats
          </p>
          <input id="file-input" type="file" className="hidden" onChange={handleFileChange} />
        </div> : <div className="bg-indigo-50 rounded-lg p-4 flex items-center">
          <div className="bg-indigo-100 p-3 rounded-md">
            <FileIcon className="h-6 w-6 text-indigo-700" />
          </div>
          <div className="ml-4 flex-1">
            <p className="text-sm font-medium text-gray-800 truncate">
              {file.name}
            </p>
            <p className="text-xs text-gray-500">
              <span className="text-indigo-600 font-medium">
                {sourceFormat}
              </span>{' '}
              file • {(file.size / 1024).toFixed(2)} KB
            </p>
          </div>
          <button onClick={() => setFile(null)} className="text-sm text-indigo-600 hover:text-indigo-800">
            Remove
          </button>
        </div>}
    </div>;
}