import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEvent from "./pages/AddEvent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-event" element={<AddEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
