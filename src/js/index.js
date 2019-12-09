import React from 'react';
import ReactDOM from 'react-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import interactionPlugin from '@fullcalendar/interaction';

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

import "./style.css";

window.FullCalendar = FullCalendar;
window.React = React;
window.ReactDOM = ReactDOM;
// You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
// For more info visit https://webpack.js.org/guides/code-splitting/


// window.Calendar = function Calendar(props) {
//   console.log("hello from calendar!" + props);
//   console.log("@fullcalendar/core/main.css");
  
//   return React.createElement(FullCalendar, {
//     defaultView: "dayGridMonth",
//     plugins: [dayGridPlugin, resourceTimeGridPlugin],
//     schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
//     header: {
//       left: "prev,next today",
//       center: "title",
//       right: "dayGridMonth, resourceTimeGridDay"
//     },
   
//   });
// };

class Calendar extends React.Component {
   calendarComponentRef = React.createRef();

 state = {
    calendarEvents: [
  
      {title: "Closing", 
       start: new Date(),
  
       resourceIds: ["roomA", "roomB"],
       editable: true
      }
    ],
    resources: [
      {title: "Room A", id: "roomA"},
      {title: "Room B", id: "roomB"}
    ]
  };

  render(){
    return (
      <FullCalendar
            defaultView="dayGridMonth"
            schedulerLicenseKey= 'GPL-My-Project-Is-Open-Source'
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth, resourceTimeGridDay"}}
      dateClick = {this.handleDateClick}
      plugins={[dayGridPlugin, 
                interactionPlugin, 
                resourceTimeGridPlugin]}      
      events = {this.state.calendarEvents}
      eventClick = {this.handleEventClick}
      resources = {this.state.resources}
          />
    );
  }

  handleEventClick = info => {
   alert(info.event.title);
  };
  
  handleDateClick = arg => {
    if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay
        })
      });
    }
  };

};

class Bar extends React.Component {
  render () {
    return (<h1>Hello World!</h1>);
  }
}

window.Bar = Bar;
window.Calendar = Calendar;
