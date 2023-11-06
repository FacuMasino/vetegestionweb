import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Downloads from '../components/Downloads';
import Contact from '../components/Contact';

const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    )
}

export default MyRoutes;