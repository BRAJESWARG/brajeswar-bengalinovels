import React, { useState } from 'react';
import Welcome from './components/Welcome';
import NovelList from './components/NovelList';
import PdfViewer from './components/PdfViewer';
import './App.css';

const App = () => {
  const [userData, setUserData] = useState({ name: '', isSubmitted: false });
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleNameSubmit = (name) => {
    setUserData({ name, isSubmitted: true });
  };

  const handlePdfOpen = (pdfFile) => {
    setSelectedPdf(pdfFile);
  };

  return (
    <div className="App">
      {!userData.isSubmitted ? (
        <Welcome onSubmit={handleNameSubmit} />
      ) : selectedPdf ? (
        <PdfViewer pdfFile={selectedPdf} onClose={() => setSelectedPdf(null)} />
      ) : (
        <NovelList name={userData.name} onOpenPdf={handlePdfOpen} />
      )}
    </div>
  );
};

export default App;