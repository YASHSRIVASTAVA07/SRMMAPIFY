import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import CollegeMap from './components/CollegeMap';
import LocationSearch from './components/LocationSearch';
import TrafficPage from './components/TrafficPage';
import EventsPage from './components/EventsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Body />
                <CollegeMap />
                <LocationSearch />
              </>
            }
          />
          <Route path="/traffic" element={<TrafficPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/map" element={<CollegeMap />} />  {/* Map page route FIXED */}
          <Route path="/contact" element={<div className="text-center mt-10">Contact Page Coming Soon!</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
