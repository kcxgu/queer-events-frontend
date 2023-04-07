import { useEffect } from "react";
import EventsSchedule from "../components/Events/Display/EventsSchedule"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Home = ({ events, selectedCity, setSelectedCity, selectedMonth, setSelectedMonth }) => {
    let selectedEvents = [];

    const getMonth = (date) => {
        return new Date(date).toLocaleString("default", { month: "long" })
    }

    const getEventsByCity = () => {
        events.forEach(item => {
            if (selectedCity === item.location.city && selectedEvents.filter(event => event._id === item._id).length === 0) selectedEvents.push(item);
        })
    }

    events.forEach(item => {
        if ((selectedMonth === "Month" || selectedMonth === "Any") && selectedCity === item.location.city && selectedEvents.filter(event => event._id === item._ed).length === 0) selectedEvents.push(item);
    })

    events.forEach(item => {
        if (getMonth(item.eventDate) === selectedMonth && selectedCity === item.location.city && selectedEvents.filter(event => event._id === item._id).length === 0) selectedEvents.push(item);
    })

    useEffect(() => {
        setSelectedMonth("Month");
        getEventsByCity();
    }, [selectedCity])


    return (
        <>
            <Navbar />
            <Hero
                events={events}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
            />
            <EventsSchedule
                events={selectedEvents}
                selectedCity={selectedCity}
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                selectedEvents={selectedEvents}
            />
        </>
    )
}

export default Home