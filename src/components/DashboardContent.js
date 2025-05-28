import React from 'react';
import '../styles/DashboardContent.css';
import AnatomySection from './AnatomySctn';
import CalendarView from './Calendar';
import UpcomingSchedule from './Upcoming';
import ActivityFeed from './Activity';
// Like It will takes up all the dashboar content here in structured manner dividing page into two columns
const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      <div className="left-column">
        <AnatomySection />
        <ActivityFeed />
      </div>
      <div className="right-column">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;