import EventsList from "../components/Events/Display/EventsList";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Events = ({ events, selectedCity, setSelectedCity }) => {
    return (
        <>
            <Navbar />
            <Hero events={events} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
            <EventsList selectedCity={selectedCity} />
        </>
    )
}

export default Events