import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventForm.css'; // стилови

const EventForm = () => {
    const [event, setEvent] = useState({ name: '', location: '', date: '', description: '', organizerId: '' });
    const [events, setEvents] = useState([]);

    const handleChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formattedDate = event.date;
        if (formattedDate.length === 16) {
            formattedDate += ":00";
        }

        // 🔁 Променето: нема повеќе http://localhost:8080
        axios.post('/api/events', { ...event, date: formattedDate })
            .then(() => {
                alert('Event created');
                setEvent({ name: '', location: '', date: '', description: '', organizerId: '' });
                fetchEvents();
            })
            .catch(() => alert('Error creating event'));
    };

    const fetchEvents = () => {
        // 🔁 Променето: користиме релативна патека
        axios.get('/api/events')
            .then(res => setEvents(res.data))
            .catch(err => console.error('Error fetching events', err));
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div className="container">
            <h1>🎉 Event Planner</h1>

            <div className="form-card">
                <h2>Create Event</h2>
                <form onSubmit={handleSubmit}>
                    <input name="name" placeholder="Event Name" value={event.name} onChange={handleChange} required />
                    <input name="location" placeholder="Location" value={event.location} onChange={handleChange} required />
                    <input name="date" type="datetime-local" value={event.date} onChange={handleChange} required />
                    <input name="description" placeholder="Description" value={event.description} onChange={handleChange} />
                    <input name="organizerId" placeholder="Organizer ID" value={event.organizerId} onChange={handleChange} />
                    <button type="submit">Create</button>
                </form>
            </div>

            <div className="event-list">
                <h2>📋 All Events</h2>
                {events.length === 0 ? (
                    <p>No events found.</p>
                ) : (
                    <ul>
                        {events.map(ev => (
                            <li key={ev.id}>
                                <strong>{ev.name}</strong> <br />
                                📍 {ev.location} <br />
                                🕒 {new Date(ev.date).toLocaleString()}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default EventForm;
