import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./Routes/MyRoutes";

const App = () => {
  return(
    <Router>
      <Navbar />
      <MyRoutes />
    </Router>
  )
};

export default App;
