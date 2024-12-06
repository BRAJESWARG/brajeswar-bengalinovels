import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const PdfViewer = ({ pdfFile, onClose }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const pdfPath = `/assets/${pdfFile}`; // Path relative to the public folder

    return (
        <div className="pdf-viewer-container">
            <button className="close-button" onClick={onClose}>Close</button>
            <div className="pdf-viewer"></div>
            <Viewer
                // fileUrl="your-pdf-file.pdf"
                plugins={[defaultLayoutPluginInstance]}
                fileUrl={pdfPath}
            />
        </div>
    );
};

export default PdfViewer;