const WhatWeDoSection = () => {
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
       Fluid AI's Multi-Agent Platform helps enterprises automate workflows,
       make smarter decisions, and deliver human-like experiences—fast, secure,
       and built to scale.
      </p>
     </div>
    </div>

    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
     {/* Left Column: Text Content */}
     <div className="flex-1 space-y-8">
      <div className="space-y-4 relative">
       <h3 className="text-3xl font-bold text-gray-900">
        Create Multi-Agent Workflows with Ease
       </h3>
       <p className="text-lg text-gray-600">
        Design and deploy scalable workflows without the tech headache. Focus on
        growth while our AI does the heavy lifting.
       </p>
       <div className="absolute -top-0 -left-4 w-1 h-full bg-[#ff6261] rounded-full" />
      </div>

      <div className="font-bold text-gray-400 text-xl space-y-4">
       <p className="group hover:text-gray-600 cursor-pointer relative">
        Not Just Text—But Voice, Too
        <span className="absolute -top-0 -left-4 w-[2px] h-[110%] bg-[#ff6261] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
       </p>
       <p className="group hover:text-gray-600 cursor-pointer relative">
        Flexible Deployment: Cloud, On-Prem, or Hybrid
        <span className="absolute -top-0 -left-4 w-[2px] h-[110%] bg-[#ff6261] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
       </p>
       <p className="group hover:text-gray-600 cursor-pointer relative">
        Agentic RAG: Real-Time Knowledge Retrieval Engine
        <span className="absolute -top-0 -left-4 w-[2px] h-[110%] bg-[#ff6261] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
       </p>
      </div>
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
