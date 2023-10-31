import Contact from "./components/Contact";
import Downloads from "./components/Downloads";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  )
};

export default App;
