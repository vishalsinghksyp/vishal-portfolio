import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import NextPage from './components/NextPage';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import About from './components/About'; // Import About component

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/next-page" element={
          <>
            <Navbar />
            <NextPage />
          </>
        } />
        <Route path="/about" element={
          <About setProgress={setProgress} />
        } />
      </Routes>
    </Router>
  );
};

export default App;
