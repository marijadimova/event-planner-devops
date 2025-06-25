import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // ✅ Променето: од http://localhost:8080 → во /api/events
        axios.get('/api/events')
            .then(res => setEvents(res.data))
            .catch(err => console.error('Error fetching events', err));
    }, []);

    return (
        <div>
            <h2>📋 All Events</h2>
            <ul>
                {events.map(e => (
                    <li key={e.id}>
                        <strong>{e.name}</strong> – {e.location} – {new Date(e.date).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
