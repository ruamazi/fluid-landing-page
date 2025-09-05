import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const SingleLink = ({ title, link }) => {
 return (
  <a
   href={link}
   className="px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#1a244d] hover:text-white"
  >
   {title}
  </a>
 );
};

const Navbar = () => {
 return (
  <nav className="flex items-center justify-between p-4 px-30 bg-[#010c1e] text-white">
   {/* Logo */}
   <div className="flex items-center space-x-2">
    <Link to="/" className="text-xl font-bold">
     <img src="/logo.webp" alt="logo" className="w-19" />
    </Link>
   </div>

   {/* Menu */}
   <div className="hidden lg:flex space-x-6 text-gray-300 transition-all duration-300 gap-4 font-semibold">
    <a href="#" className="hover:text-[#fdb529]">
     Home
    </a>
    <a href="#" className="hover:text-[#fdb529]">
     About Us
    </a>

    {/* Solutions dropdown */}
    <div className="relative group">
     <a href="#" className="flex items-center gap-2 hover:text-[#fdb529]">
      Solutions
      <ChevronDown
       size={18}
       className="transition-transform duration-300 group-hover:-rotate-180"
      />
     </a>
     {/* Dropdown menu */}
     <div className="absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 bg-[#0d1b3a] text-white p-6 rounded-2xl shadow-lg flex gap-6 z-50">
      {/* Column 1 */}
      <div className="flex flex-col gap-2 min-w-[180px]">
       <h4 className="font-semibold underline">Use cases</h4>
       <SingleLink title="Customer Service" link="#" />
       <SingleLink title="Sales Assistance" link="#" />
       <SingleLink title="Employee Productivity" link="#" />
       <SingleLink title="Marketing" link="#" />
       <SingleLink title="Internal Facing" link="#" />
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-2 min-w-[180px]">
       <h4 className="font-semibold underline">Channels</h4>
       <SingleLink title="Voice & Calls" link="#" />
       <SingleLink title="Website Chatbot" link="#" />
       <SingleLink title="WhatsApp Chatbot" link="#" />
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-2 min-w-[180px]">
       <h4 className="font-semibold underline">Serving Industries</h4>
       <SingleLink title="Banking & Finance" link="#" />
       <SingleLink title="Manufacturing" link="#" />
       <SingleLink title="Automotives" link="#" />
       <SingleLink title="Telecom" link="#" />
      </div>

      {/* Column 4 */}
      <div className="flex flex-col gap-2 min-w-[180px]">
       <h4 className="font-semibold underline">Solution Overview</h4>
       <SingleLink title="Organisational Agentic AI Capability" link="#" />
       <SingleLink title="Product Overview" link="#" />
       <SingleLink title="Architecture" link="#" />
       <SingleLink title="Integrations" link="#" />
       <SingleLink title="Platform Features" link="#" />
      </div>
     </div>
    </div>

    {/* Resources dropdown */}
    <div className="relative group">
     <a href="#" className="flex items-center gap-2 hover:text-[#fdb529]">
      Resources
      <ChevronDown
       size={18}
       className="transition-transform duration-300 group-hover:-rotate-180"
      />
     </a>
     {/* Dropdown menu */}
     <div className="absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 bg-[#0d1b3a] text-white p-6 rounded-2xl shadow-lg flex gap-6 z-50">
      {/* Column 1 */}
      <div className="flex flex-col gap-2 min-w-[180px]">
       <SingleLink title="Blogs" link="#" />
       <SingleLink title="Events" link="#" />
       <SingleLink title="Podcasts" link="#" />
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-2 min-w-[180px]">
       <SingleLink title="AI Workshop" link="#" />
       <SingleLink title="Webinars" link="#" />
       <SingleLink title="FAQs" link="#" />
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-2 min-w-[180px]">
       <SingleLink title="Reports" link="#" />
       <SingleLink title="Agentic AI Use Case Playbook" link="#" />
       <SingleLink title="ADS" link="#" />
      </div>
     </div>
    </div>

    <a href="#" className="hover:text-[#fdb529]">
     Careers
    </a>
    <a href="#" className="hover:text-[#fdb529]">
     Contact Us
    </a>
   </div>

   {/* Buttons */}
   <div className="flex items-center space-x-4">
    <button className="px-4 py-2 bg-[#34394c] hover:text-black hover:bg-white">
     Login
    </button>
    <button className="bg-blue-600 text-white px-4 py-2 hover:text-black hover:bg-white">
     Book a Demo Call
    </button>
   </div>
  </nav>
 );
};

export default Navbar;
