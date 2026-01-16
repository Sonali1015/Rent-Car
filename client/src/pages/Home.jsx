import React from "react";
import Hero from "../components/Hero";
import CarCard from "../components/CarCard";

const Home = () => {
  return (
    <>
      <Hero />
      <CarCard car={car} />
    </>
  );
};

export default Home;
