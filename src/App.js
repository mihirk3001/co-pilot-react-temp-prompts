import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";
import Contact from "./contact";


function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
