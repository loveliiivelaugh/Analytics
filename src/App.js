import React from 'react';
import Box from '@mui/material/Box';

import Dashboard from './components/dashboard/Dashboard.js';
import LineCharts from './components/charts/LineCharts';
import logo from './logo.svg';

import './App.css';


function App() {
  return (
    <Dashboard>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Blog Incoming
          </p>
          <Box sx={{ width: 400, height: 400 }}>
            <LineCharts />
          </Box>
        </header>
      </div>
    </Dashboard>
  );
}

export default App;
