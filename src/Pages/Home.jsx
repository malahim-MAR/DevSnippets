import React from "react";
import Hero from "../Components/Hero";
import ServicesSection from "../Components/ServicesSection";
import BestSnippets from "../Components/BestSnippets";
import ContactSection from "../Components/ContactSection";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <BestSnippets />
      <ContactSection />
    </>
  );
};

export default Home;
