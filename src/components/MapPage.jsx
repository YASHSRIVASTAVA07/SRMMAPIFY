import React from 'react';
import CollegeMap from './CollegeMap';

const MapPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">SRM Campus Map</h1>
      <CollegeMap />
    </div>
  );
};

export default MapPage;
