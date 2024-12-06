import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import NovelList from './components/NovelList';
import './App.css';

const App = () => {
  const [userData, setUserData] = useState({ name: '', isSubmitted: false });
  const [savedNames, setSavedNames] = useState([]);

  // Load saved names from localStorage on initial render
  useEffect(() => {
    const storedNames = localStorage.getItem('savedNames');
    if (storedNames) {
      setSavedNames(JSON.parse(storedNames));
    }
  }, []);

  const handleNameSubmit = (name) => {
    setUserData({ name, isSubmitted: true });

    // Add the name to the saved names list
    const updatedNames = [...savedNames, name];
    setSavedNames(updatedNames);

    // Store the updated list in localStorage
    localStorage.setItem('savedNames', JSON.stringify(updatedNames));
  };

  return (
    <div className="App">
      {!userData.isSubmitted ? (
        <Welcome onSubmit={handleNameSubmit} />
      ) : (
        <NovelList name={userData.name} savedNames={savedNames} />
      )}
    </div>
  );
};

export default App;