import React from 'react';
import '../styles/Activity.css';
import { activityData } from '../data/DataActivity';

// Weekly activity feed showing appointment count and chart
const ActivityFeed = () => {
  // Only count as appointment if bar height is >= 20px
  const appointmentCount = activityData.reduce((count, item) => {
    const heightNum = parseInt(item.height);
    return count + (heightNum >= 20 ? 1 : 0);
  }, 0);

  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>{appointmentCount} {appointmentCount === 1 ? 'appointment' : 'appointments'} this week</p>

      <div className="activity-chart">
        {activityData.map((item, index) => {
          const barColor = index % 2 === 0 ? '#a5b4fc' : '#2563eb';

          return (
            <div key={index} className="chart-bar">
              <div
                className="bar"
                style={{ height: item.height, backgroundColor: barColor }}
              />
              <span>{item.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;
