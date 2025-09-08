import { useState } from "react";

const WhatWeDoSection = () => {
 const [activeId, setActiveId] = useState(1);

 const data = [
  {
   id: 1,
   title: "Create Multi-Agent Workflows with Ease",
   description:
    "Design and launch scalable workflows without the tech complexity. Focus on business growth while Ovado AI handles the heavy lifting.",
  },
  {
   id: 2,
   title: "Not Just Text—But Voice, Too",
   description:
    "Engage customers and teams through dynamic, natural interactions across text and voice for a truly human-like experience.",
  },
  {
   id: 3,
   title: "Flexible Deployment: Cloud, On-Prem, or Hybrid",
   description:
    "Your infrastructure, your rules. Ovado.ai integrates seamlessly across environments, ensuring enterprise-grade security and scalability.",
  },
  {
   id: 4,
   title: "Agentic RAG: Real-Time Knowledge Retrieval Engine",
   description:
    "Empower your AI with instant access to enterprise knowledge—delivering precise, context-aware answers with no hallucinations.",
  },
 ];

 const handleItemClick = (id) => {
  setActiveId(id);
 };

 return (
  <section className="bg-white py-16 px-8 lg:px-16">
   <div className="container mx-auto max-w-7xl">
    <p className="text-sm mx-auto text-blue-500 mb-2 bg-blue-100 w-fit px-2 rounded-xl">
     What We Do
    </p>
    <div>
     <h2 className="lg:text-center text-4xl md:text-5xl font-bold py-3">
      Transform Your Enterprise with Agentic AI
     </h2>
     <div className="text-xl text-center my-10">
      <p>
       Ovado.ai’s Multi-Agent Platform enables businesses to automate workflows,
       make data-driven decisions, and deliver human-like experiences—fast,
       secure, and built for scale.
      </p>
     </div>
    </div>

    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
     {/* Left Column: Text Content */}
     <div className="flex-1 space-y-8">
      {data.map((item) => (
       <div key={item.id} className="space-y-4 relative">
        <h3
         className="text-3xl font-bold text-gray-900 cursor-pointer"
         onClick={() => handleItemClick(item.id)}
        >
         {item.title}
        </h3>
        {activeId === item.id && (
         <p className="text-lg text-gray-600">{item.description}</p>
        )}
        <div
         className={`absolute -top-0 -left-4 w-1 h-full rounded-full ${
          activeId === item.id ? "bg-[#ff6261]" : "bg-gray-300"
         }`}
        />
       </div>
      ))}
     </div>

     {/* Right Column: Image */}
     <div className="flex-1 flex justify-center md:justify-end">
      <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
       <img
        src="what-we-do.webp"
        alt="Hands typing on a laptop displaying AI"
        className="w-full h-auto object-cover"
       />
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default WhatWeDoSection;
