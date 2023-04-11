import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
//import { WindPower } from "@mui/icons-material";

// We are using full Calender API to view the Calender on the Dashboard

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [ currentEvents, setCurrentEvents ] = useState([]); //Array of events that we can put on the calender

    const handleDateClick = (selected) => {
        const title = prompt("Please enter new title for the event") //Creating a prompt
        
        //Making sure that once we select the date, we can unselect immediately, so that we can enter new title
        const calendarApi = selected.view.calendar; 
        calendarApi.unselect();

        //Giving start, end, and allDay values if title is given
        if(title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    };

    // This function will be triggered when we click on the event
    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure that, you want to delete the event '${selected.event.title}'`)) { // Confirmation for deleting the event
            selected.event.remove();
        }

    };
    // We use flex when we want to split
    return <Box m="20px">
        <Header title = "CALENDAR" subtitle="Full Calendar Interactive Page" /> 
        <Box display="flex" justifyContent="space-between">
            {/* CALENDAR SIDEBAR */}
            
            <Box flex="1 1 20%" backgroundColor = {colors.primary[400]} p="15px" borderRadius="4px">
                <Typography variant="h4">Events</Typography>
                <List>
                    {currentEvents.map((event) =>
                        <ListItem
                            key={event.id}
                            sx = {{ backgroundColor: colors.greenAccent[500], margin:"10px 0", borderRadius: "2px"}}
                        >
                            <ListItemText 
                                primary={event.title} 
                                secondary={
                                <Typography>
                                    {formatDate(event.start, {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric"
                                    })}
                                </Typography>
                            }
                            /> 
                        </ListItem>
                    )}
                </List>
            </Box>

            {/* Calendar */}
            <Box flex="1 1 100%" ml="15px">
                <FullCalendar
                    height="75vh"
                    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events) => setCurrentEvents(events)} //Saving in currentEvents in the array
                    initialEvents={[
                        {id: "1234", title: "All-day event", date: "2023-04-04"},
                        {id: "4321", title: "Timed event", date: "2023-04-10"},
                    ]}
                    />
            </Box>
        </Box>
    </Box>
};

export default Calendar