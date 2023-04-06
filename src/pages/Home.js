import EventsSchedule from "../components/Events/Display/EventsSchedule"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Home = ({ events, setSelectedCity }) => {

    return (
        <>
            <Navbar />
            <Hero events={events} setSelectedCity={setSelectedCity} />
            <EventsSchedule events={events} />
        </>
    )
}

export default Home