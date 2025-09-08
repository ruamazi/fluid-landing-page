import { ArrowUpRight } from "lucide-react";
import { ReactTyped } from "react-typed";

const Hero = () => {
 return (
  <div className="w-full bg-[#020d1e] text-white mt-17 bg-[url('/bg-img1.webp')] bg-cover">
   <div className=" mx-auto flex flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-[1346px]">
    <div className="w-full lg:w-1/2 text-left mb-10 lg:mb-0 relative">
     <h1 className="text-5xl md:text-5xl font-extrabold leading-tight text-[#fdb529] mb-4">
      Unlock Smarter Customer <br /> Success! Multi-Agent AI <br /> built to
      Automate Customer Support
     </h1>
     <h2 className="text-4xl md:text-4xl font-bold  mb-6">
      <ReactTyped
       strings={[
        "Cut support costs",
        "Boost team efficiency",
        "Elight every customer with AI-powered",
        "Personalized assistance that drives results",
       ]}
       typeSpeed={50} // typing speed
       backSpeed={30} // deleting speed
       backDelay={1500} // pause before deleting
       loop
      />
     </h2>
     <p className="text-lg text-gray-300 mb-8">
      Trusted by Leading Enterprises to Drive Results
     </p>
     <button className="flex items-center justify-center gap-1 bg-blue-600 px-8 py-4 rounded-lg hover:text-black hover:bg-white">
      Book a Demo Call
      <ArrowUpRight size={18} />
     </button>
     <img
      src="./1.svg"
      alt=""
      className="absolute -top-6 -left-8 opacity-70 w-10"
     />
    </div>
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
     <div className="w-full relative">
      <img
       src="./ovado-img.png"
       alt="AI Dashboard"
       className="rounded-xl shadow-lg"
      />
      <img
       src="./1.svg"
       alt=""
       className="absolute -top-10 -left-7 opacity-70"
      />
     </div>
    </div>
   </div>
  </div>
 );
};

export default Hero;
