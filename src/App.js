import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AddEvent from "./pages/AddEvent";
import Home from "./pages/Home";

function App() {
  const [events, setEvents] = useState([]);
  const [update, setUpdate] = useState(false);
  const [selectedCity, setSelectedCity] = useState("London");
  const [selectedMonth, setSelectedMonth] = useState("Month");

  const getEvents = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_EVENTS);
      setEvents(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getEvents()
  }, [update])

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home
            events={events}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
          />
        } />
        <Route path="/add-event" element={<AddEvent setUpdate={setUpdate} />} />
      </Routes>
    </Router>
  );
}

export default App;
