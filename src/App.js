// src/App.js
import React, { useState } from 'react';
import Home from './component/Home'; // Your Navbar component
import SignUp from './component/SignUp';
import Choose from './component/Choose';
import Service from './component/Service'; // Import the Service component

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home'); // State to control which page to show

  const renderPage = () => {
    switch (currentPage) {
      case 'SignUp':
        return <SignUp />;
      case 'Choose':
        return <Choose setCurrentPage={setCurrentPage} />;
      case 'Service': // Add this case for the Service page
        return <Service />;
      case 'Home':
     default:
        
    }
  };

  return (
    <div className="App">
      <Home setCurrentPage={setCurrentPage} currentPage={currentPage}/>

      {/* Render the selected page */}
      {renderPage()}
    </div>
  );
};

export default App;
