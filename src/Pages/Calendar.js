import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useState } from "react";

export default function Calendar() {
  const [events, setEvents] = useState([
    { id: "1234", title: "Meeting", date: "2023-01-24" },
  ]);

  const handleDateClick = (arg) => {
    // bind with an arrow function
    /* alert(arg.dateStr); */
    const message = prompt("please enter a new title for the event:");
    if (message !== null) {
      setEvents([
        ...events,
        {
          id: Date.now(),
          title: message,
          date: arg.dateStr,
        },
      ]);
    }
  };
  return (
    <div>
      <h3 style={{ margin: "20px 0 10px 0" }}>CALENDAR</h3>
      <p style={{ margin: "0 0 20px 0", color: "rgb(215 133 6)" }}>
        Full Calendar Interactive Page
      </p>
      <div style={{ width: "90%", marginLeft: "5%" }}>
        <FullCalendar
          height="70vh"
          plugins={[dayGridPlugin, interactionPlugin]}
          dateClick={handleDateClick}
          initialView="dayGridMonth"
          selectable={true}
          weekends={true}
          events={events}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,dayGridWeek,dayGridDay",
          }}
        />
      </div>
    </div>
  );
}
