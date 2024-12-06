import React, { useState } from 'react';
import Welcome from './components/Welcome';
import NovelList from './components/NovelList';
import './App.css';

const App = () => {
  const [userData, setUserData] = useState({ name: '', isSubmitted: false });

  const handleNameSubmit = (name) => {
    setUserData({ name, isSubmitted: true });
  };

  return (
    <div className="App">
      {!userData.isSubmitted ? (
        <Welcome onSubmit={handleNameSubmit} />
      ) : (
        <NovelList name={userData.name} />
      )}
    </div>
  );
};

export default App;