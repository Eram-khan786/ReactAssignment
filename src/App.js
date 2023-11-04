import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/SignUpPage';
import Form from './components/Form';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/form" element={<Form/>} />
        
      </Routes>
    </Router>
  );
};

export default App;