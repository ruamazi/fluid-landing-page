import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Define the content for each tab
const content = {
 "Fully Private Cloud": {
  title: "Fully Private Cloud: Complete data privacy and compliance.",
  features: [
   "Fully Self-Hosted AI – No external dependencies, complete in-house control.",
   "On-Prem & Air-Gapped – Secure deployments for high-compliance industries.",
   "Zero Third-Party Reliance – Full ownership of AI models and workloads.",
   "Total Data Sovereignty – Complete control over sensitive enterprise data.",
  ],
  imageSrc: "./architecture-img1.webp",
  imageAlt: "Diagram of Fully Private Cloud architecture",
 },
 "Cloud Infrastructure": {
  title: "Cloud Infrastructure: Public Cloud for rapid scaling.",
  features: [
   "Fully Managed AI Stack – Deployed on Fluid AI’s secure, high-performance cloud.",
   "Dynamic LLM Orchestration – Real-time inference, fine-tuning, and seamless updates.",
   "Scalable & Cost-Efficient – Elastic compute with enterprise-grade security.",
  ],
  imageSrc: "./architecture-img2.webp",
  imageAlt: "Diagram of Cloud Infrastructure architecture",
 },
 "Hybrid Cloud": {
  title: "Hybrid Cloud: Data Isolation Model for sensitive workflows.",
  features: [
   "Hybrid AI Processing – Data stays in your cloud, AI runs on Fluid AI’s compute.",
   "Zero Raw Data Transfer – Decoupled architecture ensures full data control.",
   "Governance-First Security – Dedicated control plane for compliance and policies.",
  ],
  imageSrc: "./architecture-img3.webp",
  imageAlt: "Diagram of Hybrid Cloud architecture",
 },
 "Private LLM Deployment": {
  title: "Private LLM Deployment: Custom models in your customer cloud.",
  features: [
   "Full LLM Stack Deployment – Runs entirely within your enterprise cloud.",
   "Private & Secure Processing – Only the control plane stays in Fluid AI’s cloud.",
   "Enterprise-Grade Governance – Complete control over AI access and compliance.",
  ],
  imageSrc: "./architecture-img4.webp",
  imageAlt: "Diagram of Private LLM Deployment architecture",
 },
};

const ArchitectureSection = () => {
 const [activeTab, setActiveTab] = useState("Hybrid Cloud");

 const activeContent = content[activeTab];

 return (
  <section className="bg-white py-8 md:py-14">
   <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-8">
     <p className="mx-auto text-sm text-blue-500 mb-2 bg-blue-100 w-fit px-2 rounded-xl ">
      Architecture
     </p>

     <h2 className="text-4xl md:text-5xl font-bold leading-tight">
      Tailored Deployment Options for Your Architecture
     </h2>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-2 sm:space-x-4 mb-6">
     {Object.keys(content).map((key) => (
      <button
       key={key}
       onClick={() => setActiveTab(key)}
       className={`
                px-4 py-2 rounded-full border-2 font-medium text-sm transition-all duration-300
                ${
                 activeTab === key
                  ? "border-black bg-white text-gray-900 shadow-sm"
                  : "border-gray-200 bg-gray-100 text-gray-600 hover:border-gray-400"
                }
              `}
      >
       {key}
      </button>
     ))}
    </div>

    {/* Content Box */}
    <div className="border border-gray-200 p-8 md:p-12 rounded-lg bg-gray-50">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      {/* Left Content */}
      <div>
       <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        {activeContent.title}
       </h3>
       <ul className="space-y-4">
        {activeContent.features.map((feature, index) => (
         <li key={index} className="flex items-start text-gray-700">
          <svg
           className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1 mr-2"
           fill="currentColor"
           viewBox="0 0 20 20"
          >
           <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
           />
          </svg>
          <span>{feature}</span>
         </li>
        ))}
       </ul>
       <button className="mt-8 bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-200 hover:text-blue-600 transition-colors flex items-center">
        View Architecture
        <ArrowUpRight />
       </button>
      </div>

      {/* Right Image/Diagram */}
      <div className="flex justify-center items-center h-full">
       <img
        className="w-full rounded-lg flex items-center justify-center"
        src={activeContent.imageSrc}
        alt={activeContent.imageAlt}
       />
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default ArchitectureSection;
