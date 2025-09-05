import { ArrowUpRight } from "lucide-react";

const ImpactSection = () => {
 const useCasesData = [
  {
   title: "Customer Support",
   icon: "./cs.webp",
  },
  {
   title: "Agent Support",
   icon: "./as.webp",
  },
  {
   title: "Operations",
   icon: "./op.webp",
  },
  {
   title: "Sales",
   icon: "./sl.webp",
  },
  {
   title: "Marketing",
   icon: "./mk.webp",
  },
  {
   title: "Supply Chain",
   icon: "./sc.webp",
  },
  {
   title: "Human Resources",
   icon: "./hr.webp",
  },
  {
   title: "Build Your Own",
   icon: "./byo.webp",
   highlight: true,
  },
 ];

 return (
  <div className="min-h-screen">
   <div className="container mx-auto px-4 py-16">
    <div className="text-center mb-16">
     <p className="text-sm mx-auto text-blue-500 mb-2 bg-blue-100 w-fit px-2 rounded-xl">
      Real-World Impact
     </p>
     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Use Cases
     </h1>
     <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
      Connect your tools, connect your teams. With over 100 apps already
      available in our directory, your team's favorite tools are just a click
      away.
     </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
     {useCasesData.map((useCase, index) => (
      <div
       key={index}
       className={`flex flex-col items-center p-6 text-center rounded-2xl transition-all
         duration-300 cursor-pointer underline decoration-blue-500
          hover:decoration-orange-500 relative py-10 max-w-3xl
              ${
               useCase.highlight
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-50 text-gray-800 border-gray-200"
              }`}
      >
       <span
        className={`${
         useCase.highlight ? "text-blue-600" : ""
        } absolute -top-10`}
       >
        <img src={useCase.icon} alt={useCase.title} />
       </span>
       <h3 className="text-lg font-semibold">{useCase.title}</h3>
      </div>
     ))}
    </div>

    <div className="text-center mt-16 flex items-center justify-center">
     <button className=" text-white flex items-center justify-center gap-1 bg-blue-600 px-8 py-[20px] rounded-lg hover:text-blue-600  hover:bg-gray-50">
      Book a Demo Call
      <ArrowUpRight size={18} />
     </button>
    </div>
   </div>
  </div>
 );
};

export default ImpactSection;
