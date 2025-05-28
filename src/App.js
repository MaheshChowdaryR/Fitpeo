import React from 'react';
import Header from './components/Header';
import Sidebar from './components/LeftSidebar';
import DashboardMainContent from './components/DashboardContent'; 
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Sidebar />
        <DashboardMainContent /> 
      </div>
    </div>
  );
};

export default App;