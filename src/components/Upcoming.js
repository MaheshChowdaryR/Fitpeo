import React from 'react';
import '../styles/Upcoming.css'; // Styling specific to the upcoming schedule section
import { upcomingSchedule } from '../data/DataUpcoming'; // Data source for the schedule

// Upcoming Schedule Component 
const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      {/* Section Heading */}
      <h3>The Upcoming Schedule</h3>

      {/* Loop through each day's schedule */}
      {upcomingSchedule.map((daySchedule, index) => (
        <div key={index} className="day-schedule">
          {/* Display the day (e.g., Monday, Tuesday) */}
          <p className="day-title">On {daySchedule.day}</p>

          {/* Render all appointments for that day in a horizontal row */}
          <div className="appointments-row">
            {daySchedule.appointments.map((appt, apptIndex) => (
              <div key={apptIndex} className="appointment-item">
                
                {/* Appointment info: title and time */}
                <div className="appointment-text">
                  <p className="appt-title">{appt.title}</p>
                  <p className="appt-time">{appt.time}</p>
                </div>

                {/* Emoji icon for quick visual reference */}
                <span className="emoji">{appt.icon}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
