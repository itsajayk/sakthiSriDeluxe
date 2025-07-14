// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms-and-suites" element={<Rooms />} />
        {/* <Route path="/facilities" element={<Facilities />} /> */}
        <Route path="/contact-page" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
