import { motion } from "framer-motion";

const AgenticSection = () => {
 return (
  <section className="bg-white py-6 md:py-12">
   <div className="container mx-auto px-4 md:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
     {/* Left Column: Text Content */}
     <div>
      <p className="text-sm text-blue-500 mb-2 bg-blue-100 w-fit px-2 rounded-xl ">
       Agentic RAG
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold md:font-bold leading-tight mb-6">
       Smarter RAG: Real-Time Learning that Drives Results
      </h1>
      <p className="text-lg text-gray-500 mb-8 font-semibold">
       Unlike standard RAG, Ovado.ai’s Agentic RAG doesn’t just answer
       questions—it learns, adapts, and optimizes continuously to meet your
       business goals with precision.
       <ul className="list-disc list-inside text-black">
        <li className="text-gray-500">
         <span className="font-bold text-black">Dynamic Learning</span> -
         Constantly evolving with new data.
        </li>
        <li className="text-gray-500">
         <span className="font-bold text-black">Goal-Driven Outputs</span> -
         Insights aligned with outcomes that matter.
        </li>
       </ul>
      </p>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
       <button className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
        Dynamic Learning
       </button>
       <button className="bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg shadow-md hover:text-[#fdb529] transition-colors">
        Goal-Driven Outputs
       </button>
      </div>

      {/* Sub-section */}
      <div className="bg-gray-100 p-6 rounded-lg flex items-center space-x-6">
       {/* the smaller image */}
       <div className="w-100 flex items-center justify-center">
        <img
         src="./howitworks-img3.webp"
         alt="Dynamic Learning"
         className="rounded-lg"
        />
       </div>
       <p className="text-base font-bold">
        Agents enhance every response by combining past context with real-time
        signals, delivering intelligence you can act on immediately.
       </p>
      </div>
     </div>

     {/* Right Column: Image */}
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
      Ovado.ai transforms information into strategy—accurate, evolving, and
      business-ready.
     </p>
    </div>
   </div>
  </section>
 );
};

export default AgenticSection;
