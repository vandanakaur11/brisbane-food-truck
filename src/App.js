import "./App.css";
import Tables from "../src/table/Tables";
import Map from "../src/map/./Map";
import { BrowserRouter as Router, Switch, Route, Link, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Tables />} />
                <Route exact path="/map" element={<Map />} />
            </Routes>
        </Router>
    );
}

export default App;
