import BestSeller from "@/components/BestSeller";
import Contact from "@/components/Contact";
import FeaturedProduct from "@/components/FeaturedProduct";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import News from "@/components/News";
import TopProduct from "@/components/TopProduct";
import React from "react"

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Hero />
      <FeaturedProduct />
      <TopProduct />
      <BestSeller />
      <News />
      <Contact />
    </div>
  );
};

export default HomePage;