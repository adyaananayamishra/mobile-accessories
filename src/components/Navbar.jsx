// import React, { useState } from "react";
// import logo from "../assets/logo.jpg";
// import { FaShoppingCart, FaUser, FaBars, FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const numberOfItems = useSelector((state) => state.cart.totalItems)
//   // const cartItems = useSelector((state) => state.cart.items)

//   // Toggle Menu
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   // Toggle Dropdowns
//   const toggleDropdown = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-md">
      
//       <Link to="/" className="flex items-center text-yellow-400">
//         <img src={logo} alt="Logo" className="h-25 w-25" />
//       </Link>

//       <div className="flex items-center space-x-7">
//         <Link to="/cart" className="relative">
//           <FaShoppingCart className="text-white hover:text-yellow-400 text-xl" />
//           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{numberOfItems}</span>
//         </Link>
      
//        <button className="text-2xl  text-white hover:text-yellow-400" onClick={toggleMenu}>
//           {isMenuOpen ? <IoMdClose /> : <FaBars />}
//         </button>
//       </div>

      
//       {isMenuOpen && (
//          <div className="fixed top-0 right-0  h-full w-4/5 bg-gray-900 text-white z-50 shadow-lg transition-transform duration-300">
       

//           <div className="flex justify-end p-4">
//             <button onClick={toggleMenu} className="text-2xl font-bold">
//               ✕
//             </button>
//           </div>

//           <nav className="flex flex-col space-y-6 p-6 text-lg">
         
//           <Link to="/" className="hover:text-yellow-400" onClick={toggleMenu}>Home</Link>
//             <Link to="/login" className="hover:text-yellow-400" onClick={toggleMenu}>Login</Link>

//             <div>
//               <button
//                 onClick={() => toggleDropdown("category")}
//                 className="flex items-center justify-between w-full hover:text-yellow-400"
//               >
//                 Category {activeDropdown === "category" ? <FaChevronUp /> : <FaChevronDown />}
//               </button>
//               {activeDropdown === "category" && (
//                 <div className="pl-4 mt-2 flex flex-col space-y-2 text-sm">
//                   <Link to="/category/headphones" onClick={toggleMenu}>Headphones</Link>
//                   <Link to="/category/charger" onClick={toggleMenu}>Charger</Link>
//                   <Link to="/category/cover" onClick={toggleMenu}>Cover</Link>
//                   <Link to="/category/earphone" onClick={toggleMenu}>Earphone</Link>
//                   <Link to="/category/powerbank" onClick={toggleMenu}>Powerbank</Link>
//                   <Link to="/category/temperglass" onClick={toggleMenu}>Temperglass</Link>
//                   <Link to="/category/memorychips" onClick={toggleMenu}>Memorychips</Link>
//                   <Link to="/category/mobilelens" onClick={toggleMenu}>Mobilelens</Link>
//                   <Link to="/category/usbcord" onClick={toggleMenu}>Usbcord</Link>
//                 </div>
//               )}
//             </div>
//             <Link to="/order" className="hover:text-yellow-400" onClick={toggleMenu}>My Orders</Link>
//             <Link to="/refer" className="hover:text-yellow-400" onClick={toggleMenu}>Refer & Earn</Link>
//             <Link to="/about" className="hover:text-yellow-400" onClick={toggleMenu}>About Us</Link>

//           <div>
//               <button
//                 onClick={() => toggleDropdown("partner")}
//                 className="flex items-center justify-between w-full cursor-pointer hover:text-yellow-400"
//               >
//                 Partner {activeDropdown === "partner" ? <FaChevronUp /> : <FaChevronDown />}
//               </button>
//               {activeDropdown === "partner" && (
//                 <div className="pl-4 mt-2 space-y-2 text-sm">
//                   <Link to="/partner/Menu upload" onClick={toggleMenu}>Menu upload</Link>
                 
//                 </div>
//                )}
              
//             </div>
//           </nav>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar

import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaShoppingCart, FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const numberOfItems = useSelector((state) => state.cart.totalItems);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center text-yellow-400">
        <img src={logo} alt="Logo" className="h-25 w-25" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/login" className="hover:text-yellow-400">Login</Link>
        
        <div className="relative">
          <button
            onClick={() => toggleDropdown("category")}
            className="flex items-center hover:text-yellow-400"
          >
            Category {activeDropdown === "category" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {activeDropdown === "category" && (
            <div className="absolute bg-gray-900 p-4 mt-2 space-y-2 text-sm w-48">
              <Link to="/category/headphones" className="block hover:text-yellow-400">Headphones</Link>
              <Link to="/category/charger" className="block hover:text-yellow-400">Charger</Link>
              <Link to="/category/cover" className="block hover:text-yellow-400">Cover</Link>
              <Link to="/category/earphone" className="block hover:text-yellow-400">Earphone</Link>
              <Link to="/category/powerbank" className="block hover:text-yellow-400">Powerbank</Link>
              <Link to="/category/temperglass" className="block hover:text-yellow-400">Temperglass</Link>
              <Link to="/category/memorychips" className="block hover:text-yellow-400">Memorychips</Link>
              <Link to="/category/mobilelens" className="block hover:text-yellow-400">Mobilelens</Link>
              <Link to="/category/usbcord" className="block hover:text-yellow-400">Usbcord</Link>
            </div>
          )}
        </div>

        <Link to="/order" className="hover:text-yellow-400">My Orders</Link>
        <Link to="/refer" className="hover:text-yellow-400">Refer & Earn</Link>
        <Link to="/about" className="hover:text-yellow-400">About Us</Link>

        <div className="relative">
          <button
            onClick={() => toggleDropdown("partner")}
            className="flex items-center hover:text-yellow-400"
          >
            Partner {activeDropdown === "partner" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {activeDropdown === "partner" && (
            <div className="absolute bg-gray-900 p-4 mt-2 space-y-2 text-sm w-48">
              <Link to="/partner/Menu upload" className="block hover:text-yellow-400">Menu upload</Link>
            </div>
          )}
        </div>
      </div>

      {/* Cart Icon */}
      <Link to="/cart" className="relative left-65 ">
        <FaShoppingCart className="text-white hover:text-yellow-400 text-2xl" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{numberOfItems}</span>
      </Link>

      {/* Mobile Menu Button */}
      <button className="text-2xl text-white hover:text-yellow-400 lg:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <IoMdClose /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-4/5 bg-gray-900 text-white z-50 shadow-lg transition-transform duration-300 lg:hidden">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-2xl font-bold">✕</button>
          </div>

          <nav className="flex flex-col space-y-6 p-6 text-lg">
            <Link to="/" className="hover:text-yellow-400" onClick={toggleMenu}>Home</Link>
            <Link to="/login" className="hover:text-yellow-400" onClick={toggleMenu}>Login</Link>

            <div>
              <button
                onClick={() => toggleDropdown("category")}
                className="flex items-center justify-between w-full hover:text-yellow-400"
              >
                Category {activeDropdown === "category" ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeDropdown === "category" && (
                <div className="pl-4 mt-2 flex flex-col space-y-2 text-sm">
                  <Link to="/category/headphones" onClick={toggleMenu}>Headphones</Link>
                  <Link to="/category/charger" onClick={toggleMenu}>Charger</Link>
                  <Link to="/category/cover" onClick={toggleMenu}>Cover</Link>
                  <Link to="/category/earphone" onClick={toggleMenu}>Earphone</Link>
                  <Link to="/category/powerbank" onClick={toggleMenu}>Powerbank</Link>
                  <Link to="/category/temperglass" onClick={toggleMenu}>Temperglass</Link>
                  <Link to="/category/memorychips" onClick={toggleMenu}>Memorychips</Link>
                  <Link to="/category/mobilelens" onClick={toggleMenu}>Mobilelens</Link>
                  <Link to="/category/usbcord" onClick={toggleMenu}>Usbcord</Link>
                </div>
              )}
            </div>

            <Link to="/order" className="hover:text-yellow-400" onClick={toggleMenu}>My Orders</Link>
            <Link to="/refer" className="hover:text-yellow-400" onClick={toggleMenu}>Refer & Earn</Link>
            <Link to="/about" className="hover:text-yellow-400" onClick={toggleMenu}>About Us</Link>

            <div>
              <button
                onClick={() => toggleDropdown("partner")}
                className="flex items-center justify-between w-full cursor-pointer hover:text-yellow-400"
              >
                Partner {activeDropdown === "partner" ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeDropdown === "partner" && (
                <div className="pl-4 mt-2 space-y-2 text-sm">
                  <Link to="/partner/Menu upload" onClick={toggleMenu}>Menu upload</Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
