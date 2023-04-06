import AddEventForm from "../components/Events/AddEventForm"
import Navbar from "../components/Navbar"

const AddEvent = ({ setUpdate }) => {
    return (
        <>
            <Navbar />
            <AddEventForm setUpdate={setUpdate} />
        </>
    )
}

export default AddEvent