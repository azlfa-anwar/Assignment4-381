import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Courses from "./CoursesPage";
import Login from "./LoginForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;