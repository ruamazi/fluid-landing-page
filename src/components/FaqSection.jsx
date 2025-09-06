import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const faqData = [
 {
  question: "What is Fluid AI ?",
  answer:
   "Fluid AI is an leading AI company, that specializes in making Generative AI technology Enterprise-ready. Fluid AI offer Gen-AI powered Chatbots, Voice Calling bots, range of API's to build a customized layer on top and Integrations that can drive more powerful automation. The solution offered by Fluid AI are designed to enhance end-customer experiences (CX), streamline organizational internal workflows & boost employee productivity (EX), enhancing data driven decision-making, across various industries.",
 },
 {
  question:
   "Can I integrate Fluid AI with my organisations current workflows ?",
  answer:
   "Yes, organizations can easily integrate Fluid AI with their current systems, with over 1000+ APIs available. It can seamlessly connect with existing tools and applications, (Slack and Microsoft Teams,) for Omnichannel experienceThe integration capabilities extend to various data sources, including cloud storage and databases, to SQL data. This allows for easy and efficient access to organization-specific information, enabling quick accurate responses to queries, all the while safeguarding the confidentiality & security of your data.",
 },
 {
  question:
   "How can I choose the use cases to deploy the Generative AI Solution for my organisation ?",
  answer:
   "We suggest organisations to start with small internal pilot projects to test effectiveness before full-scale deployment. At this level you can prioritize use cases that directly benefit employees and free them for higher-value use case, like customer support, HR team, Employe support, Sales Team, legal assistance, etc. Organisations find this more effective and helps to build confidence to gain an understanding of the technology, and then expanding its implementation across.Our expertise lies in guiding organizations through a seamless transition, empowering organizations to fully unlock the potential of GenAI, leading to performance enhancements, productivity gains, and a competitive edge in the marketplace. Book a Free Strategic Call with us.",
 },
];

const FaqSection = () => {
 const [openIndex, setOpenIndex] = useState(null);

 const toggleAnswer = (index) => {
  setOpenIndex(openIndex === index ? null : index);
 };

 return (
  <section className="bg-white py-16 md:py-24 border-t-2 border-2 border-gray-100 lg:bg-[url('/bg-img2.webp')]">
   <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-12">
     <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
      FAQ's
     </h2>
    </div>
    <div className="max-w-3xl mx-auto space-y-4">
     {faqData.map((item, index) => (
      <div key={index} className="p-6 rounded-lg shadow-sm">
       <button
        onClick={() => toggleAnswer(index)}
        className="flex justify-between items-center w-full text-left font-bold text-lg md:text-xl text-gray-900"
       >
        <span>{item.question}</span>
        <motion.div
         className="w-12 h-12 flex items-center justify-center"
         animate={{ rotate: openIndex === index ? 180 : 0 }}
         transition={{ duration: 0.3 }}
        >
         {openIndex === index ? (
          <Minus className="text-blue-600" />
         ) : (
          <Plus className="text-blue-600" />
         )}
        </motion.div>
       </button>
       <AnimatePresence>
        {openIndex === index && (
         <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-gray-700 leading-relaxed"
         >
          <p>{item.answer}</p>
         </motion.div>
        )}
       </AnimatePresence>
      </div>
     ))}
    </div>

    <div className="text-center mt-12">
     <button className="inline-flex gap-1 py-4 items-center bg-blue-600 text-white px-6 rounded-lg shadow-lg  hover:bg-gray-100 hover:text-blue-600 transition-colors">
      Explore more FAQ's
      <ArrowUpRight size={18} />
     </button>
    </div>
   </div>
  </section>
 );
};

export default FaqSection;
