import React from "react";
import {
 Zap,
 Globe,
 Lock,
 Code,
 Sparkles,
 TrendingUp,
 SquareUser,
 ArrowUpRight,
} from "lucide-react";

const features = [
 {
  icon: Sparkles,
  title: "Agentic AI with RAG",
  description: "AI dynamically retrieves and processes real-time insights.",
  iconColor: "text-blue-500",
 },
 {
  icon: SquareUser,
  title: "Custom AI Avatars",
  description: "Create AI-powered influencers like AIsha for engagement.",
  iconColor: "text-orange-500",
 },
 {
  icon: Zap,
  title: "Seamless AI + Human",
  description: "AI automates content, while humans add strategy.",
  iconColor: "text-pink-500",
 },
 {
  icon: Globe,
  title: "Customizable Solutions",
  description: "Tailored to your business processes and challenges.",
  iconColor: "text-green-500",
 },
 {
  icon: Code,
  title: "No-Code AI Development",
  description: "Drag-and-drop interface for easy AI customization",
  iconColor: "text-yellow-500",
 },
 {
  icon: TrendingUp,
  title: "Immediate ROI",
  description:
   "Faster results, improved accuracy, and streamlined operations from day one.",
  iconColor: "text-purple-500",
 },
 {
  icon: Lock,
  title: "Enterprise-Grade Security",
  description:
   "Fluid AI is ISO 27001 certified and SOC 2 Type II compliant, ensuring enterprise-grade.",
  iconColor: "text-red-500",
 },
];

const FeaturesSection = () => {
 return (
  <section className="bg-white py-8 md:py-12">
   <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-12">
     <p className="mx-auto text-sm text-blue-500 mb-2 bg-blue-100 w-fit px-2 rounded-xl ">
      Why Choose Fluid AI?
     </p>
     <h2 className="text-4xl md:text-5xl font-bold leading-tight">
      Unmatched Performance, Security, and Speed – Deploy in 60 Days
     </h2>
     <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
      Fluid AI’s Agentic AI Platform is built to deliver results, backed by:
     </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
     {features.map((feature, index) => {
      const IconComponent = feature.icon;
      return (
       <div
        key={index}
        className="p-6 rounded-xl border border-gray-200 shadow-sm
                  bg-gradient-to-br from-gray-100 to-white
                  transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
       >
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white mb-4">
         <IconComponent size={24} className={feature.iconColor} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
         {feature.title}
        </h3>
        <p className="text-sm text-gray-600">{feature.description}</p>
       </div>
      );
     })}
    </div>

    <div className="text-center">
     <button className="inline-flex gap-1 py-4 items-center bg-blue-600 text-white px-6 rounded-lg shadow-lg  hover:bg-gray-200 hover:text-blue-600 transition-colors">
      Book a Demo Call
      <ArrowUpRight size={18} />
     </button>
    </div>
   </div>
  </section>
 );
};

export default FeaturesSection;
