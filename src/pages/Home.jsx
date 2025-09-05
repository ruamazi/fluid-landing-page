import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Organizations from "../components/Organizations";
import Footer from "../components/Footer";
import WhatWeDoSection from "../components/WhatWeDo";
import ImpactSection from "../components/ImpactSection";

const Home = () => {
 return (
  <>
   <Navbar />
   <Hero />
   <Organizations />
   <WhatWeDoSection />
   <ImpactSection />
   <Footer />
  </>
 );
};

export default Home;
