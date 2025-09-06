import { motion } from "framer-motion";

const AgenticSection = () => {
 return (
  <section className="bg-white py-6 md:py-24">
   <div className="container mx-auto px-4 md:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
     {/* Left Column: Text Content */}
     <div>
      <p className="text-sm text-blue-500 mb-2 bg-blue-100 w-fit px-2 rounded-xl ">
       Agentic RAG
      </p>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
       AI That Learns, Adapts & Optimizes in Real Time
      </h1>
      <p className="text-lg text-gray-500 mb-8 font-bold">
       Traditional Retrieval-Augmented Generation (RAG) simply fetches and
       generates responses, but Fluid AI's Agentic RAG takes it further—it
       thinks strategically, refines insights, and aligns with business goals
       dynamically.
      </p>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
       <button className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
        Dynamic Learning
       </button>
       <button className="bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg shadow-md hover:text-[#fdb529] transition-colors">
        Goal-Driven Outputs
       </button>
      </div>

      {/* Sub-section with image placeholder */}
      <div className="bg-gray-100 p-6 rounded-lg flex items-center space-x-6">
       {/* Placeholder for the smaller image */}
       <div className="w-100 flex items-center justify-center">
        <img
         src="./howitworks-img3.webp"
         alt="Dynamic Learning"
         className="rounded-lg"
        />
       </div>
       <p className="text-base font-bold">
        Agents continuously refine answers based on past data and real-time
        inputs.
       </p>
      </div>
     </div>

     {/* Right Column: Image Placeholder */}
     <div className="flex-col md:flex justify-center items-center">
      <motion.div
       initial={{ x: -200, opacity: 0 }} // Start off-screen to the left
       whileInView={{ x: 0, opacity: 1 }} // Animate to visible
       transition={{ duration: 0.8, ease: "easeOut" }}
       viewport={{ once: true }} // Animate only once when scrolled into view
       className="w-full max-w-[500px] bg-gray-200 rounded-lg flex items-center justify-center"
      >
       <img src="./agentic-img.webp" alt="Agentic RAG" className="rounded-lg" />
      </motion.div>
     </div>
    </div>

    {/* Bottom text line */}
    <div className="mt-6 text-center md:text-left">
     <p className=" text-gray-600 font-bold">
      Your AI isn't just retrieving information—it's strategizing, optimizing,
      and delivering actionable intelligence.
     </p>
    </div>
   </div>
  </section>
 );
};

export default AgenticSection;
