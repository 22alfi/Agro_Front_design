// src/App.js
import React, { useState } from 'react';
import Home from './component/Home'; // Your Navbar component
import SignUp from './component/SignUp';
import Choose from './component/Choose';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home'); // State to control which page to show

  const renderPage = () => {
    switch (currentPage) {
      case 'SignUp':
        return <SignUp />;
      case 'Choose':
        return <Choose setCurrentPage={setCurrentPage} />; // Pass setCurrentPage here
      case 'Home':
      default:
        return <h2></h2>; // Placeholder for Home component content
    }
  };

  return (
    <div className="App">
      {/* Pass the setCurrentPage function to Home (Navbar) to allow navigation */}
      <Home setCurrentPage={setCurrentPage} />

      {/* Render the selected page */}
      {renderPage()}
    </div>
  );
};

export default App;
