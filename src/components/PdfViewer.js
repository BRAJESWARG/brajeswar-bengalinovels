import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '../styles/PdfViewer.css';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
// Worker workerUrl={`https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js`}


const PdfViewer = ({ pdfFile, onClose }) => {
  const pdfPath = `/assets/${pdfFile}`; // Path relative to the public folder

  return (
    <div className="pdf-viewer-container">
      <button className="close-button" onClick={onClose}>Close</button>
      <div className="pdf-viewer">
        <Worker
          // workerUrl="/pdf.worker.min.js"
          // workerUrl={`https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsDistVersion}/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl={pdfPath} />
        </Worker>
      </div>
    </div>
  );
};

export default PdfViewer;