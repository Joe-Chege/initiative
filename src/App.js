import React from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import JiwezePortfolio from './components/JiwezePortfolio';
import Footer from './components/Footer'; // Update the import here

function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <JiwezePortfolio />
      <Footer /> {/* Update the usage here */}
      {/* Add other components/pages as needed */}
    </div>
  );
}

export default App;
