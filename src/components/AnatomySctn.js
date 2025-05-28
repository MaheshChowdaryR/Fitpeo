import React from 'react';
import '../styles/AnatomySctn.css';
import { anatomyData } from '../data/DataAnatomy';
import { healthStatusData } from '../data/DataHealth';
// Displays the anatomy image and a weekly health summary – layout
const AnatomySection = () => {
  // Place indicators over body image – reflects key health zones
  const renderIndicators = anatomyData.map((dataPoint, idx) => {
    const positionStyles = {
      top: dataPoint.position.top,
      left: dataPoint.position.left,
      right: dataPoint.position.right,
      bottom: dataPoint.position.bottom,
      backgroundColor: dataPoint.color
    };
    return (
      <div key={idx} className="anatomy-indicator" style={positionStyles}>
        <span className="scanner-sign">◆</span>
        <span className="indicator-label">{dataPoint.emoji} {dataPoint.label}</span>
      </div>
    );
  });

  // Render health bars – width is static for now
  const healthBars = healthStatusData.map((entry, i) => {
    const barWidth = "70%"; // percentage based on health score
    return (
      <div key={i} className="health-status-item">
        <div className="health-status-header">
          <h4 className="health-status-title">{entry.emoji} {entry.title}</h4>
          <span className="health-status-date">{entry.date}</span>
        </div>
        <div className="status-bar">
          <div
            className="status-bar-fill"
            style={{ width: barWidth, backgroundColor: entry.color }}
          ></div>
        </div>
        <p className="health-status-detail">{entry.detail}</p>
      </div>
    );
  });

  return (
    <div className="anatomy-section">
      <h2 className="dashboard-heading">Dashboard</h2>
      <div className="anatomy-container">
        {/* Left: Image + Indicators */}
        <div className="anatomy-image-wrapper">
          <div className="anatomy-image-container">
            <img
              src="https://png.pngtree.com/png-clipart/20231203/original/pngtree-male-anatomy-figure-body-photo-png-image_13757170.png"
              alt="Human Anatomy"
              className="anatomy-image"
            />
            {renderIndicators}
          </div>
        </div>

        {/* Right: Health Breakdown */}
        <div className="health-status-section">
          <h3 className="health-status-heading">This Week</h3>
          <div className="health-status-items">
            {healthBars}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection