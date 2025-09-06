import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Organizations from "../components/Organizations";
import Footer from "../components/Footer";
import WhatWeDoSection from "../components/WhatWeDo";
import ImpactSection from "../components/ImpactSection";
import HowItWorks from "../components/HowItWorks";
import AgenticSection from "../components/AgenticSection";
import LLMsSection from "../components/LLMsSection";
import ArchitectureSection from "../components/ArchitectureSection";

const Home = () => {
 return (
  <>
   <Navbar />
   <Hero />
   <Organizations />
   <WhatWeDoSection />
   <ImpactSection />
   <HowItWorks />
   <AgenticSection />
   <LLMsSection />
   <ArchitectureSection />
   <Footer />
  </>
 );
};

export default Home;
