import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Content for each integration tab
const integrationsContent = {
 "Finance & Big Data": {
  description: "Snowflake, SAP Forex, SQL",
  image: "integrations-img1.webp",
  key: "finance",
 },
 "Collaboration & Knowledge": {
  description: "confluence, Google Drive",
  image: "integrations-img2.webp",
  key: "collaboration",
 },
 "Multi-App Connectivity": {
  description: "Chrome Extensions, Slack, MS Teams, Gmail",
  image: "integrations-img3.webp",
  key: "multi-app",
 },
};

const IntegrationsSection = () => {
 const [activeTab, setActiveTab] = useState("Finance & Big Data");

 return (
  <section className="bg-white py-10 md:py-16">
   <div className="container mx-auto px-4 mb-7 md:px-8">
    <div className="text-center mb-12">
     <p className="mx-auto text-sm text-blue-500 mb-2 bg-blue-100 w-fit px-2 rounded-xl ">
      Powerful Integrations
     </p>
     <h2 className="text-4xl md:text-5xl font-bold leading-tight">
      Seamlessly Connect Across Your Ecosystem
     </h2>
     <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
      Fluid AI integrates effortlessly with your internal systems, APIs, and
      external data sources—ensuring real-time data flow for intelligent
      automation.
     </p>
    </div>

    <div className="flex flex-col lg:flex-row items-center justify-center mt-12">
     {/* Left Side: Navigation Tabs */}
     <div className="flex-1 max-w-md lg:max-w-none text-center lg:text-left mb-12 lg:mb-0">
      {Object.keys(integrationsContent).map((title) => (
       <div
        key={title}
        className={`cursor-pointer mb-6 last:mb-0 transition-all duration-300 ${
         activeTab === title
          ? "text-gray-900"
          : "text-gray-400 hover:text-gray-600"
        }`}
        onClick={() => setActiveTab(title)}
       >
        <div
         className={`border-l-4 py-1 pl-4 font-bold transition-all duration-300
                    ${
                     activeTab === title ? "border-red-500" : "border-gray-200"
                    }`}
        >
         <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
         {activeTab === title && (
          <motion.p
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: 10 }}
           className="mt-2 text-base font-normal text-gray-600"
          >
           {integrationsContent[title].description}
          </motion.p>
         )}
        </div>
       </div>
      ))}
     </div>

     {/* Right Side: Image with Animation */}
     <div className="flex-1 relative flex justify-center items-center">
      <AnimatePresence mode="wait">
       <motion.div
        key={integrationsContent[activeTab].key}
        initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
        transition={{ duration: 0.4 }}
        className=" rounded-full border-gray-300 flex justify-center items-center overflow-hidden relative"
       >
        {/* Image */}
        <img
         src={integrationsContent[activeTab].image}
         alt={integrationsContent[activeTab].key}
         className="rounded-full w-72 md:w-full object-cover"
        />
       </motion.div>
      </AnimatePresence>
     </div>
    </div>
   </div>
   <div className="w-full h-[2px] bg-gray-100" />
  </section>
 );
};

export default IntegrationsSection;
