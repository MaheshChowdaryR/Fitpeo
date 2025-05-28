import React from 'react';
import '../styles/Calendar.css';
import { calendarAppointments } from '../data/DataCalendar';
import { appointmentDetails } from '../data/DataAppointment';

// CalendarView: Weekly calendar with time slots and appointment highlights
const CalendarView = () => {
  // Fixed week view – could be dynamic later (e.g., via moment.js or date-fns)
  const weekDates = [25, 26, 27, 28, 29, 30, 31];
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  // Today’s date in our mock dataset
  const currentDay = 26;

  // Available appointment hours in a working day
  const allTimeSlots = [
    '08:00', '09:00', '10:00',
    '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00'
  ];

  // Helper: Fetch appointment details for a specific day & time
  const getAppointmentForDayAndTime = (day, time) => {
    const dayAppts = calendarAppointments.find(appt => appt.day === day);
    if (!dayAppts) return null;

    const isScheduled = dayAppts.times.includes(time);
    if (!isScheduled) return null;

    // Match detailed info from appointmentDetails
    const detail = appointmentDetails.find(d => d.time.split('-')[0] === time);
    return detail || null;
  };

  // Helper: Collect time slots for a day (includes 1-hour buffers before and after each)
  const getTimeSlotsForDay = (day) => {
    const appts = calendarAppointments.find(appt => appt.day === day);
    if (!appts) return [];

    const slots = new Set();
    appts.times.forEach(time => {
      const idx = allTimeSlots.indexOf(time);
      if (idx > 0) slots.add(allTimeSlots[idx - 1]);
      slots.add(time);
      if (idx < allTimeSlots.length - 1) slots.add(allTimeSlots[idx + 1]);
    });

    return Array.from(slots).sort(); // Ensure order for grid rendering
  };

  // For each day, figure out which slots to show
  const allDaySlots = weekDates.map(day => getTimeSlotsForDay(day));

  // Max number of rows needed based on the day with the most slots
  const maxRows = Math.max(...allDaySlots.map(slots => slots.length));

  // Current appointment is hardcoded to 9:00 on current day (mock logic)
  const currentAppt = getAppointmentForDayAndTime(currentDay, '09:00');

  // Next appointment is on the 28th at 11:00
  const nextAppt = getAppointmentForDayAndTime(28, '11:00');

  return (
    <div className="calendar-wrapper">
      {/* Calendar header with simple nav buttons (non-functional for now) */}
      <div className="calendar-header-bar">
        <h3>October 2021</h3>
        <div className="calendar-nav">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>

      {/* Main calendar grid */}
      <div className="calendar-grid">
        {/* Top row: Day and date labels */}
        {days.map((day, i) => (
          <div
            key={i}
            className={`calendar-day-header ${weekDates[i] <= currentDay ? 'active' : ''}`}
          >
            <div className="day-label">{day}</div>
            <div className="date-label">{weekDates[i]}</div>
          </div>
        ))}

        {/* Time slot rows for each day */}
        {Array.from({ length: maxRows }).map((_, rowIdx) =>
          weekDates.map((date, colIdx) => {
            const timeSlots = allDaySlots[colIdx];
            const time = timeSlots[rowIdx];

            if (!time) {
              // Empty slot (no time exists for this row in this day)
              return <div key={`${rowIdx}-${colIdx}`} className="calendar-slot" />;
            }

            const appt = getAppointmentForDayAndTime(date, time);

            // Flags to style the slot conditionally
            const isCurrent = date === currentDay && time === '09:00';
            const isCompleted = date < currentDay || (date === currentDay && time < '09:00');
            const isUpcoming = date > currentDay && appt;

            return (
              <div
                key={`${rowIdx}-${colIdx}`}
                className={`calendar-slot
                  ${isCurrent ? 'current-slot' : ''}
                  ${isUpcoming ? 'next-slot' : ''}
                  ${isCompleted ? 'completed-slot' : ''}
                `}
              >
                {/* Show time if slot is empty; otherwise show nothing */}
                {appt ? time : (isCompleted ? '—' : time)}
              </div>
            );
          })
        )}
      </div>

      {/* Appointment cards below the calendar */}
      <div className="appointment-cards">
        {/* Highlight today's appointment */}
        {currentAppt && (
          <div className="appointment-card highlighted">
            <div className="card-content">
              <div className="card-text">
                <div className="card-title">{currentAppt.title}</div>
                <div className="card-time">{currentAppt.time}</div>
                <div className="card-name">{currentAppt.name}</div>
              </div>
              <span className="emoji">🦷</span>
            </div>
          </div>
        )}

        {/* Upcoming appointment (next in the week) */}
        {nextAppt && (
          <div className="appointment-card upcoming">
            <div className="card-content">
              <div className="card-text">
                <div className="card-title">{nextAppt.title}</div>
                <div className="card-time">{nextAppt.time}</div>
                <div className="card-name">{nextAppt.name}</div>
              </div>
              <span className="emoji">💪</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
