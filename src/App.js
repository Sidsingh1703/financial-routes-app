import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScanningProvider } from './context/ScanningContext';
import routes from './routes';
import './App.css';

function App() {
  return (
    <ScanningProvider>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </ScanningProvider>
  );
}

export default App;
