import React, { useState } from 'react';

const LocationSearch = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Placeholder - Replace with actual Google API call
    alert(`Searching for location: ${location}`);
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-10">
      <h2 className="text-3xl font-bold mb-6">Welcome to SRM Mapify</h2>
      <div className="flex gap-4">
        <input 
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 border border-gray-400 rounded-lg w-80"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default LocationSearch;
