import React, { useState } from 'react';
import Welcome from './components/Welcome';
import NovelList from './components/NovelList';
import './App.css';

const App = () => {
  const [userName, setUserName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameSubmit = (name) => {
    setUserName(name);
    setIsSubmitted(true);
  };

  return (
    <div className="App">
      {!isSubmitted ? (
        <Welcome onSubmit={handleNameSubmit} />
      ) : (
        <NovelList name={userName} />
      )}
    </div>
  );
};

export default App;