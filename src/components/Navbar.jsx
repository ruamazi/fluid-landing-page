import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavLinks = ({ className }) => (
 <div className={`${className} relative`}>
  <a href="#home" className="hover:text-[#fdb529]">
   Home
  </a>
  <a href="#about-us" className="hover:text-[#fdb529]">
   About Us
  </a>
  <a href="#use-cases" className="hover:text-[#fdb529]">
   Use Cases
  </a>
  <a href="#deployment" className="hover:text-[#fdb529]">
   Deployment
  </a>
  <a href="#integrations" className="hover:text-[#fdb529]">
   Integrations
  </a>
  <a href="#faq" className="hover:text-[#fdb529]">
   ⁠FAQ
  </a>
  <a href="#contact-us" className="hover:text-[#fdb529]">
   Contact Us
  </a>
 </div>
);

const Navbar = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 return (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 px-10  lg:px-20 bg-[#010c1e] text-white">
   <div className="flex items-center space-x-2">
    <Link to="/">
     <img src="/ovado-ai-logo1.png" alt="logo" className="w-28" />
    </Link>
   </div>

   {/* Desktop Menu */}
   <NavLinks className="hidden min-[1200px]:flex gap-0 lg:gap-1 text-gray-300 transition-all duration-300 font-semibold" />

   {/* Buttons */}
   <div className="hidden min-[1200px]:flex items-center space-x-4">
    <a
     href="#contact-us"
     className="bg-blue-600 text-white px-4 py-2 hover:text-black hover:bg-white rounded-lg cursor-pointer transition-all duration-300 text-center"
    >
     Book a Demo Call
    </a>
   </div>

   {/* Burger Menu Icon */}
   <div className="min-[1200px]:hidden">
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
    className={`absolute top-full left-0 w-full bg-[#010c1e] min-[1200px]:hidden transition-all duration-300 ease-in-out ${
     isMenuOpen ? "max-h-screen overflow-y-auto" : "max-h-0 overflow-hidden"
    }`}
   >
    <NavLinks className="flex flex-col items-center space-y-4 py-8 text-gray-300 font-semibold" />
    <div className="flex flex-col items-center space-y-4 py-4">
     <a
      href="#contact-us"
      className="bg-blue-600 text-white px-4 py-2 hover:text-black hover:bg-white w-3/4 rounded-lg cursor-pointer transition-all duration-300 text-center"
     >
      Book a Demo Call
     </a>
    </div>
   </div>
  </nav>
 );
};

export default Navbar;
