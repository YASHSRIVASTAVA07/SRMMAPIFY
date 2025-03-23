// src/components/Body.jsx
import React from 'react';
import Carousel from './Carousel';

const Body = () => {
  return (
    <main className="p-6">
      <Carousel />
      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Welcome to SRM Mapify</h2>
        <p>Find your way around SRM Campus easily. Explore events, locations, and more!</p>
      </section>
    </main>
  );
};

export default Body;
