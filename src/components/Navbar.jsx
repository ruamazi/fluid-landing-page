import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const SingleLink = ({ title, link }) => (
 <a
  href={link}
  className="px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#1a244d] hover:text-white"
 >
  {title}
 </a>
);

const NavLinks = ({
 className,
 isSolutionsOpen,
 toggleSolutions,
 isResourcesOpen,
 toggleResources,
}) => (
 <div className={`${className} relative`}>
  <a href="#" className="hover:text-[#fdb529]">
   Home
  </a>
  <a href="#" className="hover:text-[#fdb529]">
   About Us
  </a>

  {/* Solutions dropdown */}
  <div className=" group lg:block">
   <a
    href="#"
    className="flex items-center gap-2 hover:text-[#fdb529]"
    onClick={toggleSolutions}
   >
    Solutions
    <ChevronDown
     size={18}
     className={`transition-transform duration-300 ${
      isSolutionsOpen ? "-rotate-180" : ""
     }`}
    />
   </a>
   <div
    className={`lg:absolute lg:left-0 lg:top-full lg:mt-2 lg:invisible lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100 lg:group-hover:translate-y-1 transition-all duration-300 lg:bg-[#0d1b3a] text-white lg:p-6 lg:rounded-2xl lg:shadow-lg lg:flex lg:gap-6 lg:z-50 ${
     isSolutionsOpen ? "block" : "hidden"
    }`}
   >
    <SolutionsDropdown />
   </div>
  </div>

  {/* Resources dropdown */}
  <div className="group lg:block">
   <a
    href="#"
    className="flex items-center gap-2 hover:text-[#fdb529]"
    onClick={toggleResources}
   >
    Resources
    <ChevronDown
     size={18}
     className={`transition-transform duration-300 ${
      isResourcesOpen ? "-rotate-180" : ""
     }`}
    />
   </a>
   <div
    className={`lg:absolute lg:left-20 lg:top-full lg:mt-2 lg:invisible lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100 lg:group-hover:translate-y-1 transition-all duration-300 lg:bg-[#0d1b3a] text-white lg:p-6 lg:rounded-2xl lg:shadow-lg lg:flex lg:gap-6 lg:z-50 ${
     isResourcesOpen ? "block" : "hidden"
    }`}
   >
    <ResourcesDropdown />
   </div>
  </div>

  <a href="#" className="hover:text-[#fdb529]">
   Careers
  </a>
  <a href="#" className="hover:text-[#fdb529]">
   Contact Us
  </a>
 </div>
);

const SolutionsDropdown = () => (
 <>
  <div className="flex flex-col gap-2 min-w-[180px]">
   <h4 className="font-semibold underline">Use cases</h4>
   <SingleLink title="Customer Service" link="#" />
   <SingleLink title="Sales Assistance" link="#" />
   <SingleLink title="Employee Productivity" link="#" />
   <SingleLink title="Marketing" link="#" />
   <SingleLink title="Internal Facing" link="#" />
  </div>
  <div className="flex flex-col gap-2 min-w-[180px]">
   <h4 className="font-semibold underline">Channels</h4>
   <SingleLink title="Voice & Calls" link="#" />
   <SingleLink title="Website Chatbot" link="#" />
   <SingleLink title="WhatsApp Chatbot" link="#" />
  </div>
  <div className="flex flex-col gap-2 min-w-[180px]">
   <h4 className="font-semibold underline">Serving Industries</h4>
   <SingleLink title="Banking & Finance" link="#" />
   <SingleLink title="Manufacturing" link="#" />
   <SingleLink title="Automotives" link="#" />
   <SingleLink title="Telecom" link="#" />
  </div>
  <div className="flex flex-col gap-2 min-w-[180px]">
   <h4 className="font-semibold underline">Solution Overview</h4>
   <SingleLink title="Organisational Agentic AI Capability" link="#" />
   <SingleLink title="Product Overview" link="#" />
   <SingleLink title="Architecture" link="#" />
   <SingleLink title="Integrations" link="#" />
   <SingleLink title="Platform Features" link="#" />
  </div>
 </>
);

const ResourcesDropdown = () => (
 <>
  <div className="flex flex-col gap-2 min-w-[180px]">
   <SingleLink title="Blogs" link="#" />
   <SingleLink title="Events" link="#" />
   <SingleLink title="Podcasts" link="#" />
  </div>
  <div className="flex flex-col gap-2 min-w-[180px]">
   <SingleLink title="AI Workshop" link="#" />
   <SingleLink title="Webinars" link="#" />
   <SingleLink title="FAQs" link="#" />
  </div>
  <div className="flex flex-col gap-2 min-w-[180px]">
   <SingleLink title="Reports" link="#" />
   <SingleLink title="Agentic AI Use Case Playbook" link="#" />
   <SingleLink title="ADS" link="#" />
  </div>
 </>
);

const Navbar = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
 const [isResourcesOpen, setIsResourcesOpen] = useState(false);

 const toggleSolutions = () => {
  setIsSolutionsOpen(!isSolutionsOpen);
  setIsResourcesOpen(false); // Close other dropdown
 };

 const toggleResources = () => {
  setIsResourcesOpen(!isResourcesOpen);
  setIsSolutionsOpen(false); // Close other dropdown
 };

 return (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 px-10 md:px-30 bg-[#010c1e] text-white">
   <div className="flex items-center space-x-2">
    <Link to="/">
     <img src="/ovado-ai-logo1.png" alt="logo" className="w-28" />
    </Link>
   </div>

   {/* Desktop Menu */}
   <NavLinks className="hidden lg:flex space-x-6 text-gray-300 transition-all duration-300 gap-4 font-semibold" />

   {/* Buttons */}
   <div className="hidden lg:flex items-center space-x-4">
    <button className="px-4 py-2 bg-[#34394c] hover:text-black hover:bg-white">
     Login
    </button>
    <button className="bg-blue-600 text-white px-4 py-2 hover:text-black hover:bg-white">
     Book a Demo Call
    </button>
   </div>

   {/* Burger Menu Icon */}
   <div className="lg:hidden">
    <button
     onClick={() => setIsMenuOpen(!isMenuOpen)}
     className="relative w-8 h-8"
    >
     <Menu
      size={28}
      className={`absolute top-1 left-1 transition-all duration-300 ${
       isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
      }`}
     />
     <X
      size={28}
      className={`absolute top-1 left-1 transition-all duration-300 ${
       isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
      }`}
     />
    </button>
   </div>

   {/* Mobile Menu */}
   <div
    className={`absolute top-full left-0 w-full bg-[#010c1e] lg:hidden transition-all duration-300 ease-in-out ${
     isMenuOpen ? "max-h-screen overflow-y-auto" : "max-h-0 overflow-hidden"
    }`}
   >
    <NavLinks
     className="flex flex-col items-center space-y-4 py-8 text-gray-300 font-semibold"
     isSolutionsOpen={isSolutionsOpen}
     toggleSolutions={toggleSolutions}
     isResourcesOpen={isResourcesOpen}
     toggleResources={toggleResources}
    />
    <div className="flex flex-col items-center space-y-4 py-4">
     <button className="px-4 py-2 bg-[#34394c] hover:text-black hover:bg-white w-3/4">
      Login
     </button>
     <button className="bg-blue-600 text-white px-4 py-2 hover:text-black hover:bg-white w-3/4">
      Book a Demo Call
     </button>
    </div>
   </div>
  </nav>
 );
};

export default Navbar;
