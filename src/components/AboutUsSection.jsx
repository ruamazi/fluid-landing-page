import { ArrowUpRight } from "lucide-react";

const AboutUsSection = () => {
 return (
  <section className="bg-white max-w-7xl mx-auto">
   <div className="container mx-auto px-6 py-16 md:py-28">
    <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
     {/* LEFT - Text */}
     <div className="md:col-span-7">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
       Transformation with
       <br />
       <span className="text-yellow-400">Fluid AI</span>
      </h2>

      <p className="mt-6 text-slate-600 max-w-2xl text-base md:text-lg">
       Join leading businesses using the <strong>Agentic AI Platform</strong> to
       drive efficiency, innovation, and growth.
      </p>

      <p className="mt-4 text-slate-700 max-w-2xl text-base md:text-lg">
       Contact Us Today to schedule a demo and see how Agentic AI can
       revolutionize your business operations.
      </p>

      <div className="mt-8">
       <button className="inline-flex gap-1 py-4 items-center bg-blue-600 text-white px-6 rounded-lg shadow-lg  hover:bg-gray-100 hover:text-blue-600 transition-colors">
        Book a Free Demo Call
        <ArrowUpRight size={18} />
       </button>
      </div>
     </div>

     <div className="md:col-span-5 flex justify-center">
      <div className="w-full max-w-[520px]">
       {/* Top row: 2 images */}
       <div className="flex justify-center gap-4">
        <img
         src="./t-img1.webp"
         alt="top-left"
         className="w-[46%]  object-cover rounded-md shadow-lg"
        />

        <img
         src="./t-img2.webp"
         alt="top-right"
         className="w-[46%]  object-cover rounded-md shadow-lg"
        />
       </div>

       {/* Bottom row: 3 images */}
       <div className="grid grid-cols-3 gap-4 mt-4 h-full">
        <img
         src="./t-img3.webp"
         alt="bottom-1"
         className="w-full  md:h-36 lg:h-44 object-cover rounded-md shadow-lg"
        />
        <img
         src="./t-img4.webp"
         alt="bottom-2"
         className="w-full md:h-40 lg:h-48 object-cover rounded-md shadow-lg"
        />
        <img
         src="./t-img5.webp"
         alt="bottom-3"
         className="w-full  md:h-36 lg:h-44 object-cover rounded-md shadow-lg"
        />
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default AboutUsSection;
