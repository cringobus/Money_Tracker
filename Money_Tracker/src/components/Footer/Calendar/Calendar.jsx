import './Calendar.css'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling

export default function AppointmentCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-card">
      <h3 className="h3">Select a Date</h3>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}
